from flask import Flask, render_template

app = Flask(__name__)
app.debug = True
app.secret_key = "ADSOCXZ(@>?!)_2HA!xz.'[]"

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/events', )
def return_events():
    return ''

@app.route('/events/<id>')
def return_event():
    return ''

@app.route('/events/categories')
def return_categories():
    return "Kultura, "

if __name__ == '__main__':
    app.run()


