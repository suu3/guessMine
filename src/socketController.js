import events from "./events";

const socketController = socket => {
    const broadcast = (event, data) => socket.broadcast.emit(event, data);

    socket.on("setNickname", ({ nickname }) => {
        console.log(nickname);
        socket.nickname = nickname;
        broadcast(events.newUser, { nickname });
    });

    socket.on(events.disconnect, () => {
        broadcast(events.disconnected, { nickname: socket.nickname });
    });
};
  
export default socketController;