const express = require("express");
const paypal = require("paypal-rest-sdk");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const getBaseUrl = require("./utils");

dotenv.config();

paypal.configure({
  mode: "live",
  client_id: process.env.client_id,
  client_secret: process.env.client_secret,
});

const port = process.env.PORT || 7000;

const app = express();


var urlencodedParser = bodyParser.urlencoded({ extended: false });
var donationAmount;

app.use(bodyParser.json());

app.set("port", port);
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/pay", urlencodedParser, (req, res) => {
  let amountArray = Object.values(req.body);

  for (let i = 0; i < amountArray.length; i++) {
    if (amountArray[i].length !== 0) {
      donationAmount = amountArray[i];
    }
  }

  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: getBaseUrl(process.env.NODE_ENV),
      cancel_url: `${getBaseUrl(process.env.NODE_ENV)}/cancel`,
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "item",
              sku: "001",
              price: donationAmount,
              currency: "USD",
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: "USD",
          total: donationAmount,
        },
        description: "Personal Donation",
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      console.log(error.response.details, "%%%");
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
});

app.get("/success", (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  var execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: donationAmount,
        },
      },
    ],
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (
    error,
    payment
  ) {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      res.send("Success");
    }
  });
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/products", (req, res) => {
  res.sendFile(__dirname + "/products.html");
});

app.get("/donations", (req, res) => {
  res.sendFile(__dirname + "/donations.html");
});

app.get("/cancel", (req, res) => res.send("Cancelled"));

app.listen(port, () => console.log("server started"));