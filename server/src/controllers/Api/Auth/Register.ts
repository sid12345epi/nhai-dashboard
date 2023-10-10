import * as api from '../../../middlewares/API';
import { Request, Response } from "express";
import Redis from "../../../providers/Redis";
import { v4 as uuid } from "uuid";
import * as jwt from "jsonwebtoken";
import axios from 'axios';
import Locals from '../../../providers/Locals';
import * as path from "path";
const BASE_URL = Locals.config().baseUrl;
const SECRET_KEY = "My_Sceret_Key";
const issuedTokens = new Set<string>();
//instance of redis class
const useRedis = new Redis();
const ttlInSeconds = 180; // 30 min

class Register {

  // // Handle GET requests to /api route
  // public static visit(req, res) {
  //   res.json({ message: "Hello from server!" });
  // };

  // // All other GET requests not handled before will return our React app
  // public static ui(req, res) {
  //   res.sendFile(path.join(__dirname, "../../build", "index.html"));
  // };
  //
  public static async redisAccess(req: Request, res: Response): Promise<any> {
    try {
      const jsonObject = {
        name: "Redis Tested",
        age: 27,
        email: "sid@example.com",
      };
      const jsonString = JSON.stringify(jsonObject);
      // const usage = 2;
      // const ttlInSeconds = null;
      await useRedis.set("Object2", jsonString, ttlInSeconds);
      const output = await useRedis.get("Object2");
      const name = output?.name || "Unknown";
      res.send(`Welcome to Auth-Proxy Application - ${name}`);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  public static async genrateToken(req: Request, res: Response): Promise<any> {
    try {
      const randomUUID = uuid();
      //console.log("Genrated UUID", randomUUID);
      const payload = {
        user_id: randomUUID,
        username: "user_name",
      };
      const options = {
        expiresIn: "5m",
      };
      const token = jwt.sign(payload, SECRET_KEY, options);
      issuedTokens.add(token);
      res.json({
        id: randomUUID,
        token: token,
      });
    } catch (error) {
      console.error("Error generating token:", error);
      res.status(500).json({ message: "Token generation failed" });
    }
  }

  public static async verifyToken(req: Request, res: Response): Promise<any> {
    const token = req.body.session_token;
    console.log('token:---', token);
    if (!token || !issuedTokens.has(token)) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }
      res.json({ message: "Token verified", decoded });
    });
    issuedTokens.delete(token);
  }

  public static async verifyJWT(req: Request, res: Response): Promise<any> {
    const token = req.body.session_token;
    if (!token) {
      return res.json({ message: "Token not found" });
    }
    jwt.verify(token, SECRET_KEY, (err: any, decoded: any) => {
      if (err) {
        console.log("token error ->", err);
        return res.json({ message: "Invalid token" });
      }
      res.json({ message: "Token verified", decoded });
    });
  }

  public static async register(req: any, res: any, next: any): Promise<any> {
    const encryptedData = req.body.encrypted;
    console.log('Register User data:-', encryptedData);
    try {
      const singleUseJwt = await api.get(BASE_URL + `/api/auth/generate-token`);
      // Assuming api.post is an asynchronous function
      //adding jwt token to header
      const headers: any = {
        'Content-Type': 'application/json', // Example: setting Content-Type
        'Authorization': singleUseJwt.data.token, // Example: setting an Authorization header
      };
      const tokenVerified = await api.post(BASE_URL + `/api/auth/verify-token`, { session_token: singleUseJwt.data.token }, "");
      console.log('tokenVerified:---', (tokenVerified || {}).data);
      if (tokenVerified.data.message === 'Token verified') {
        // axios.defaults.headers = headers;
        const registerUser = await api.post('https://dummyjson.com/users/add', encryptedData, headers); //java backend API call
        res.json(registerUser); // Sending the response after processing
      }
    } catch (error) {
      console.error('Error during POST request:', error);
      res.status(500).json({ error: 'Error during POST request' });
    }
  }
}

export default Register;
