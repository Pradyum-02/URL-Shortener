const { nanoid } = require("nanoid");

const Url = require("../models/url.model");

const shortenURL = async (req, res) => {

    try {

        const { url } = req.body;

        if (!url) {
    return res.status(400).json({
        success: false,
        message: "URL is required"
    });
}

try {
    new URL(url);
} catch (error) {
    return res.status(400).json({
        success: false,
        message: "Please enter a valid URL"
    });
}

        const existingURL = await Url.findOne({

    originalUrl: url

});

if (existingURL) {

    return res.status(200).json({

        success: true,

        shortUrl: `https://url-shortener-api-9b84.onrender.com/${newURL.shortCode}`

    });

}

        const shortCode = nanoid(6);

        const newURL = await Url.create({

            originalUrl: url,

            shortCode: shortCode

        });

   res.status(201).json({
    success: true,
    shortUrl: `https://url-shortener-api-9b84.onrender.com/${existingURL.shortCode}`
});

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};



const redirectURL = async (req, res) => {

    try {

        const { shortCode } = req.params;

        const url = await Url.findOneAndUpdate(
    {
        shortCode: shortCode
    },
    {
        $inc: {
            clicks: 1
        }
    },
    {
        new: true
    }
);

        if (!url) {

            return res.status(404).json({

                success: false,

                message: "URL Not Found"

            });

        }

        res.redirect(url.originalUrl);

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};
module.exports = {

    shortenURL,
    redirectURL,

};