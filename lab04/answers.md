# Lab 4: Docker Tutorial

**Before you begin...**
1. Ensure that Docker is running and that you can access the Docker Dashboard
1. Open the command prompt
2. Run the following command: `docker run -dp 80:80 docker/getting-started`
3. Open [http://localhost](http://localhost) in your browser to complete the tutorial.


Complete the following tutorial sections (note that #4 and #9 are optional) and answer the questions below:

## 1. Getting Started
Consider the command you just ran: `docker run -d -p 80:80 docker/getting-started`

Answer the following:
1. Explain what the -p flag is doing (in your own words)
    The -p flag is telling docker to map a certian port form the host computer to the port of the container, in this case it is mapping port 80 to port 80.
2. How do you think [http://localhost](http://localhost) is communicating with Docker?
    Docker establishes background network connections between my WSL and the container. By running the previous command I have matched up the ports between the two allowing for communication between the two.

## 2. Our Application
When you download and unzip `app`, save it inside of the `lab04` directory (while on your `lab04` branch). Then follow the instructions for this section. When you're done, answer the following questions about the `Dockerfile` you just made:
1. What is `node:18-alpine` and where did it come from?

    It is a Docker image that represents Node.js and uses alpine linux distribution. the 18 refers to the Node.js version 18

2. Which commands in the Dockerfile instructed Docker to copy the code from `app` onto the Docker image? Explain.

    WORKDIR specifies the directory, in this case it is the app directory. then COPY . . command coppied the code from app to the docker image. the first `.` refers to the current directory on my computer where the Dockerfile is located, the second `.` refers to the directory inside the docker image.

3. What do you think would happen if you forgot to add `CMD ["node", "src/index.js"]` in your Dockerfile? Why?

    I think that the dockerfile wouldnt know what command to run when it starts. The CMD tells Docker to run the Node command with the src/index.js file. I think the application wouldnt start when you run the container.

## 3. Updating Our App
In this section, you learned that if you make a change to the code, you have to 
* Rebuild the Docker image,
* Delete the container that you previously made (which is still running), and
* Create a brand new container

Answer the following:
1. What are two ways you can delete a container?

    the first way to delete a container is to stop the container then use the docker rm command.
    the second way is to use the docker dashboard and click the trach can icon, then confirm.

## 4. Sharing Our App (Optional)
You don't have to complete this section, but I do want you to navigate to the Docker Image repository and take a look: [https://hub.docker.com/search?q=&type=image&image_filter=official](https://hub.docker.com/search?q=&type=image&image_filter=official). These are all of the potential Docker Images you can utilize to build your own containers (which will save you a lot of time)!

## 5. Persisting our DB

1. What is the difference between the `run` and the `exec` command?
    the run command creates an enviornment for and initilizes the container, the exec command runs a process inside of an already running container. so the key difference is run creates the container from scratch and exec just runs a process in a container that exists.
2. What does the `docker exec -it` command do, exactly. Try asking ChatGPT!
    according to ChatGPT, the `-i` flag stands for interactive, and allows you to keep STDIN open so you can interact with the container, the `-t` flag allocates a pseudo terminal that allows you to run commands as if you were in a normal terminal session.
3. What was the purpose of creating a volume?
    So the purpose of creating a volume is for data persistance so the data can be available even after the container is stopped or deleted.
4. Optional: How does the TODO app code know to use the volume you just made? Hint: open `app/src/persistence/sqlite.js` and see if you can figure it out.

## 6. Using Bind Mounts
1. Why are bind mounts useful? 
    theyre useful because you dont need to have all the build tools and enviornments installed, with the `docker run` command the dev enviornment is pulled and ready to go.
2. Note that the commands below can also be represented in a Dockerfile (instead of in one big string of commands on the terminal). What are the advantages of using a Dockerfile?
    I think the first advantage would be you dont have to type out a long string into the command line, it is easily executable. another would be for version control, its easy to see whats changed where as youd need to sort through a `history` command in the terminal to see what you changed in the string each time.

```
docker run -dp 3000:3000 \
    -w /app -v "$(pwd):/app" \
    node:18-alpine \
    sh -c "yarn install && yarn run dev"
```

## 7. Multi-Container Apps
If you have never worked with network applications, this section may be confusing. That said, try to answer this question as best you can:

1. If you have two containers running that are sandboxed (i.e., one container can't reach into another container and see its internal state or code), how did you get your two containers to communicate with one another? In other words, how was the web application container able to communicate with the database container?
    When i ran the network command it created a virtual LAN inside of docker that established a connection between the two allowing them to communicate.

## 8. Using Docker Compose
1. What is the purpose of the `docker-compose.yml` file?
    the file defines how to run multiple containers together in a single enviornment.

## 9. Image Building Best Practices (Optional)
Optional section. Only complete if you want to.


## What to turn in
After answering all of the questions above...
1. Make sure that your `app` folder is inside of your `lab04` folder (including your `Dockerfile` and `docker-compose.yml` files).
1. Then, stage, commit, and push your 'lab04' branch to GitHub. 
1. Create a Pull Request (but do not merge your pull request -- that doesn't happen until Sarah reviews it).
1. Paste a link to your pull request in the Lab04 submission
