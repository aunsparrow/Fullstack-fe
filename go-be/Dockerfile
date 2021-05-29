FROM golang:1.15.6 AS build
COPY ./ /app/
WORKDIR /app/
RUN CGO_ENABLED=0 GOOS=linux go build -o /bin/aed_chat_bot_backend

FROM alpine:3.12
ENV TZ=Asia/Bangkok
COPY --from=build /bin/aed_chat_bot_backend /

EXPOSE 7000 
CMD ["/go-be"]