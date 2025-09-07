FROM ubuntu
RUN apt update -y
RUN apt install apache2 -y
COPY index.html styles.css script.js /var/www/html/
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
