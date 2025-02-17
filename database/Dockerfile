# Base image
FROM postgres:15

# Set environment variables for PostgreSQL
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin
ENV POSTGRES_DB=docdoc_database

# Expose the PostgreSQL port
EXPOSE 5432

# Use the default PostgreSQL entrypoint
CMD ["postgres"]


#example:
#docker build -t postgres-15 .
#docker run -d --name docdocdb -p 5344:5432 postgres-15 