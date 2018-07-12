
export class CustomWebSocket {

  connexion;
  callbacks;

  constructor(url) {
    this.connexion = new WebSocket(url);
    this.callbacks = {};

    // dispatch to the right handlers
    this.connexion.onmessage = (evt) => {
      console.log(evt);
      const json = JSON.parse(evt.data)
      this._dispatch(json.type, json.data);
    };

    this.connexion.onopen = (evt) => {
      this._dispatch('open', console.log('connection has been opened', evt))
    };
    this.connexion.onclose = () => {
      this._dispatch('close', null)
    };


  }
  // binds a custom event handler to onMessage.
  bind(eventName, callback) {
      this.callbacks[eventName] = this.callbacks[eventName] || [];
      this.callbacks[eventName].push(callback);
      return this;
  };

  // send data to server.
  send(eventName, eventData) {
    const payload = JSON.stringify({type:eventName, data: eventData});
    this.connexion.send( payload ); // <= send JSON data to socket server
    return this;
  };

  // dispatch multiple events.
  _dispatch(eventName, message){
    let chain = this.callbacks[eventName];
    if(typeof chain === 'undefined') return; // no callbacks for this event
    for(let i = 0; i < chain.length; i++){
      chain[i]( message );
    }
  }
}
