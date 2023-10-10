import * as express from 'express';
import * as api from '../../../middlewares/API';
import axios from 'axios';
import Redis from "../../../providers/Redis";
import { v4 as uuid } from "uuid";
import Locals from '../../../providers/Locals';
const useRedis = new Redis();
const ttlInSeconds = 180; // 30 min
const BASE_URL = Locals.config().baseUrl;
class Dashboard {
  public static async dashboard(req: any, res: any, next: any): Promise<any> {
    const uuidHeader = req.header('XUuid');
    const useRedis = new Redis();
    const redisRES = await useRedis.get(uuidHeader);

    console.log('Received UUID from frontend:- ', uuidHeader || 0);
    console.log('Redis data present:-', redisRES);

    if (redisRES !== null && redisRES !== "Please provide redis key") {
      console.log('jwt token get from redis:-----', redisRES.sessionToken);
      const tokenVerified = await api.post(BASE_URL + `/api/auth/verify-JWT`, { session_token: redisRES.sessionToken }, "");
      console.log('tokenVerified:---', tokenVerified.message);
      if (tokenVerified.message === "Invalid token") {
        debugger
        const session_token = await api.get(BASE_URL + `/api/auth/generate-token`);
        console.log('session_token', session_token.token);
        const headers: any = {
          'Content-Type': 'application/json', // Example: setting Content-Type
          'Authorization': session_token.token, // Example: setting an Authorization header
        };
        //----------Update redis with token----------- 
        redisRES.sessionToken = session_token.token;
        const jsonString = JSON.stringify(redisRES);
        await useRedis.set(uuidHeader, jsonString, ttlInSeconds);
        //axios.defaults.headers = headers;
        console.log('headers:-', headers);
        //const registerUser = await api.post('https://dummyjson.com/users/add', encryptedData);
        res.json({
          message: "Token refresh."
        });
      } else {
        res.json({
          message: "valid token."
        });
      }
    } else if (redisRES == "Please provide redis key") {
      return res.json({
        message: "Please provide valid redis key"
      });
    }
    else {
      console.log('session expired');
      return res.json({
        message: "session expired"
      });

    }
  }
}

export default Dashboard;
