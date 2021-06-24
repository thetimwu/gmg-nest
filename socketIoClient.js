const socket = io('http://localhost:3000/');

const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSubmitNewMessage = () => {
  console.log(message.value);
  socket.emit('message', { data: message.value }, (data) =>
    console.log('from server', data),
  );
};

socket.on('message', ({ data }) => {
  console.log('received...', data);
  handleNewMessage(data);
});

handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
};

buildNewMessage = (message) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(message));
  return li;
};

socket.on('connect', () => {
  // socket.sent('hello');
  console.log('sending from client... connect on connect');
  // socket.emit(
  //   'salutations',
  //   'Hello!',
  //   { mr: 'Tim' },
  //   Uint8Array.from([1, 2, 3.4]),
  // );
  socket.emit('salutations', 'hello from client');
});

socket.on('greetings', (elem1, elem2, elem3) => {
  console.log(elem1, elem2, elem3);
});
