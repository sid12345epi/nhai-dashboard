import * as jwt from "jsonwebtoken";

class RefreshToken {
  public static getToken(req): string {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      return req.headers.authorization.split(" ")[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    }

    return "";
  }

  public static refreshToken(req, res): any {
    const _token = RefreshToken.getToken(req);
    if (_token === "") {
      return res.json({
        error: ["Invalid Token!"],
      });
    }

    // const decode = jwt.decode(
    // 	_token,
    // 	res.locals.app.appSecret,
    // 	{ expiresIn: res.locals.app.jwtExpiresIn }
    // );
  }
}

export default RefreshToken;
