<script>
class Message {
	constructor(Owner, inbox) {
  	this.sender = Owner._accountDetails().email
    this.receiver = inbox.field_751728 == this.sender ? inbox.field_751729 : inbox.field_751728
    this.message = null
    this.chatID = inbox.field_751726[0].id
  }
  _sendMessage() {
  const valid = document.querySelector('[data-desktop-message-text]').value.replace(/\n/g, "").replace(/\s/g, "").trim()
  if(valid) {
    this.message = document.querySelector('[data-desktop-message-text]').value.trim()
  } else {
    this._messageSentFaild()
    return
  }
  const data =  {
    "field_751726" : [this.chatID],
    "field_751728" : this.sender,
    "field_751729" : this.receiver,
    "field_751731" : this.message
  }
      add(data, 118033, neatlistB.key)
}

  _createChatId() {
    const data =  {
      "field_751723" : this.sender,
      "field_751724" : this.receiver
    }
    add(data, 118032, neatlistB.key)
  }
  _messageSentSuccess() {
    this.__sendMessage().then(value=>{
      const mineOrNot=""
      const Name = "You"
      const dayTime = "Now"
      $(".messages-grid").append(`
           <div id="w-node-_8dcf25fe-814e-2de8-0469-39cf8fd09a67-06e84186" class="${mineOrNot}my-message">
            <div class="message-header-convo w-row">
                <div class="w-col w-col-6">
                    <h5 class="sender-receiver">${Name}</h5>
                </div>
                <div class="w-col w-col-6">
                    <div class="date-time">${dayTime}</div>
                </div>
            </div>
            <div class="message-header-convo message-box not-my-message-box">
                <div class="${mineOrNot}my-message-text">${value.text}</div>
            </div>
         </div>
      `)
      })
    }
  _messageSentFaild() {
  console.log("Sowething went Wrong!")
  }
}

</script>