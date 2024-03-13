const dotenv = require("dotenv").config();
const { spawnSync } = require("child_process");

class controller {
  async getImg(req, res) {
    try {
      const { text } = req.body;

      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      const generateString = (length) => {
        let result = "";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength),
          );
        }

        return result;
      };

      let random = generateString(20);

      const pythonProcess = await spawnSync("python3", [
        "./img.py",
        text,
        random,
      ]);

      res.status(200).json({ img: dotenv.parsed.STATUS === "DEV"
      ? dotenv.parsed.URL_BACK_DEV + random + ".jpg" 
      : dotenv.parsed.URL_BACK_PROD + random + ".jpg" });
    } catch (e) {
      res.status(400).json({ message: "Server error, please try again" });
    }
  }
}

module.exports = new controller();
