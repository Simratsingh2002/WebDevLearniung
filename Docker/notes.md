docker ps shows all container and docker img shows all images in system
#docker run -it ubuntu    -- this command ran on machine allows us to run ubuntu container on our machine in interactive mode and we can go inside root of that container , ubuntu conatiner downloaded on my macos will be independent of mac no matter what
#any command we run if we have that image in our local system fine otherwise it pulls or downaloads it from docker hub .com   especially in this command docker pull image_name 
3. docker pull image_name   only pullls image but doesnt run it 
4. docker run xyz-  will create  the container from new image and run and show all logs without interaction

5. but docker start and docker stop are used to restart and stop existing container 
6. docker run -d -e MY_XYZ_ROOT=secret --name simrat_container mysql:8.0
#the above command means run docker container -d = Detached mode (runs in background, by default everything runs in attach)  -e MY_XYZ_ROOT=secret = Sets an environment variable  simrat_Conatiner is name of container to be set and mysql image to be used of 8.0 vrsion.

7. to remove an image first we have to remove container then we remove the image from device. 
8. image bhot saari layers se bani hoti h , starts with base layeer , then some layers , then container layer , all these layers except container layer are only for read only

9. docker run -p8080:3306 img_name , it meanss we connect host machine port 8080 to docker container own port 3306 , all request on 8080 will be forwarded to 3306

10. to interact with container termianl - docker exec -it CONT_ID /bin/bash(or sh)jo bhi uss container m  

11. docker container vs VM -   usually a system has three layers , hardware , OS Kernel , application layer ...   so docker virtualizes only applicaion layer , but vM virtualizes application and OS too .
Docker also has small vm isnide it which converts mac or windows to linux as docker container are only fro linux.