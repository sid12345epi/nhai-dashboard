import Log from "../middlewares/Log";
import Locals from "../providers/Locals";

class Handler {
  /**
   * Handles all the not found routes
   */
  public static notFoundHandler(_express): any {
    const apiPrefix = Locals.config().apiPrefix;

    _express.use("*", (req, res) => {
      const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

      Log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
      if (req.xhr || req.originalUrl.includes(`/${apiPrefix}/`)) {
        return res.json({
          error: "Page Not Found",
        });
      } else {
        res.status(404);
        return res.render("pages/error", {
          title: "Page Not Found",
          error: [],
        });
      }
    });

    return _express;
  }

  /**
   * Register your error / exception monitoring
   * tools right here ie. before "next(err)"!
   */
  public static logErrors(err, req, res, next): any {
    Log.error(err.stack);

    return next(err);
  }
}

export default Handler;
