FROM python:3-alpine
WORKDIR /app
CMD ["python3", "-m", "http.server", "3000"]