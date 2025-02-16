from flask import Flask
app = Flask(__name__)


@app.route("/CalgaryHacks2025")
def home():
    return "Hello, World!"




if __name__ == "__main__":
    app.run(host= 'localhost', debug=True)
