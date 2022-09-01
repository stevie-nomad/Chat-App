const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('messsage-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your name?')
appendMessage('You Joined')
socket.emit('new-user', name)

socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message }`)
})

socket.on('user-Connected', name => {
    appendMessage(`${name} connected`)
}) 

socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`)
}) 


messageFRom.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage(`You: ${message}`)
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innnerText= message
    messageContainer.append(messageElement)
}