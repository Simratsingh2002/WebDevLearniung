#docker run -it ubuntu    -- this command ran on machine allows us to run ubuntu container on our machine in interactive mode and we can go inside root of that container , ubuntu conatiner downloaded on my macos will be independent of mac no matter what
#any command we run if we have that image in our local system fine otherwise it pulls or downaloads it from docker hub .com   especially in this command docker pull image_name 
3. docker pull image_name   only pullls image but doesnt run it 
4. docker run xyz-  will create  the container from new image and run and show all logs without interaction

5. but docker start and docker stop are used to restart and stop existing container 
6. docker run -d -e MY_XYZ_ROOT=secret --name simrat_container mysql:8.0
#the above command means run docker container -d = Detached mode (runs in background)  -e MY_XYZ_ROOT=secret = Sets an environment variable  simrat_Conatiner is name of container to be set and mysql image to be used of 8.0 vrsion.

7. to remove an image first we have to remove container then we remove the image from device. 