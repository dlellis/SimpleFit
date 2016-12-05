apt-get -y update
apt-get -y upgrade

apt-get -y install apache2 libapache2-mod-wsgi python-pip

pip install -r requirements.txt

cp -r ../SimpleFit/ /var/www/production/

cp apache.conf /etc/apache2/sites-available/000-default.conf

chmod 664 /var/www/production/db.sqlite3

chown -R www-data:www-data /var/www/production/

echo "ServerName localhost" >> /etc/apache2/apache2.conf

service apache2 restart

