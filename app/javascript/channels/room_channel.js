import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log('estamos conectados')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {

    $('#messsage_holder').append('<div class="message">' + data.content + '</div>')
    console.log(data)
    // Called when there's incoming data on the websocket for this channel
  }
});
