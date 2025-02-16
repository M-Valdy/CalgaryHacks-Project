from flask import Flask
app = Flask(__name__)

import sqlite3

@app.route("/CalgaryHacks2025")
def home():
    file_name = input("Enter the name of the file you want to open: ")


@

if __name__ == "__main__":
    app.run(host= 'localhost', debug=True)
