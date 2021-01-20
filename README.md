# stock_website

Website: www.pairsstocktrading.com

This website was creating using Django and deplyed through Heroku. It functions as an interface to track the results of the pairs trading code (bmd0018/stocktrading_algo repo), and is updated at the end of every trading day. The site has several pages, each with a different function.

The home page, or Dashboard, can be seen in the screenshot below. It summarizes the results up to the current day. The results are compared to the S&P 500 for assessment.

![Alt text](static/data/dashboard_screenshot.png?raw=true "Dashboard")

The Action List page contains a table instructing the user which stocks to buy/sell on the given day. It is an overall summary of many of the other, more detailed pages. The Active Trades page, as seen in the screenshot below, tracks all stock pairs that are currently being traded. 

![Alt text](static/data/activetable_screenshot.png?raw=true "Active Trades")

Overall, this site is a starting point for this project. I hope that it will expand into a more comprehensive and automated process.
