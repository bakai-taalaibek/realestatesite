FROM openjdk:17-jdk-alpine
VOLUME /app
EXPOSE 8080
COPY target/realestatesite-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]