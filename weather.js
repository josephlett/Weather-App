First, you need to sign up for the OpenWeatherMap API and obtain an API key.



Next, install the Requests and Flask packages in your Python environment using pip.


pip install requests
pip install flask


Now, write a Python function that retrieves the weather data for a given location from the OpenWeatherMap API using the Requests library. In this example, we will retrieve the current temperature in Celsius.



import requests

def get_weather_data(city_name, api_key):
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={api_key}&units=metric'
    response = requests.get(url)
    data = response.json()
    return data['main']['temp']


Next, create a Flask web application that takes a user input for the city name, calls the get_weather_data() function, and displays the current temperature on a web page using Jinja2 templating.



from flask import Flask, request, render_template

app = Flask(__name__)\n\n   @app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather', methods=['POST'])
def weather():
    city_name = request.form['city']
    api_key = 'YOUR_API_KEY'
    temperature = get_weather_data(city_name, api_key)
    return render_template('weather.html', city=city_name, temperature=temperature)

if __name__ == '__main__':
    app.run(debug=True)


Finally, create two HTML templates index.html and weather.html using Jinja2 templating.


index.html



<form action=\"/weather" method="post">
    <label for="city">Enter city name: </label>
    <input type="text" name="city" id="city">
    <input type="submit" value="Get weather">
</form>

weather.html



<h2>Current weather for {{ city }}:</h2>
<p>{{ temperature }} &deg;C</p>
<a href="/">Back to home</a>


Run the Flask application and open a web browser to http://localhost:5000. Enter the name of the city for which you want to retrieve the weather data, and click the "Get weather" button. The current temperature for that city will be displayed on the next page.





