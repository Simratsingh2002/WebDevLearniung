



# Use the official Python image as the base image
FROM python:3.11-slim

ENV NAME=Simrat 

RUN mkdir -p /app


# Copy the current directory contents into the container at /app
COPY . /app

# Expose the port that the application will run on
EXPOSE 8000

# Run the application using the command python server.py 
CMD ["python", "server.py"]

#now we run docker build -t nameuska ,,,which makes the image. iss docker file m jaankari h ki image ko build karna hai.  And image m jankari h ki container kaise bnega, container kya hota h - vo ik isolate env deta h code ko run karna ke liye .  

#docker container is an actual running instance,  image is a screenshot or instructions of what a local dev should should look like 