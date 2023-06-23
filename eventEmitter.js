// https://leetcode.com/problems/event-emitter/description/?utm_campaign=PostD27&utm_medium=Post&utm_source=Post&gio_link_id=lPQDyGjR


class EventEmitter {

    events = new Map();
    
    subscribe(event, cb) {
        
      if(this.events.get(event)){
          const callbacks = this.events.get(event);
          callbacks.push(cb)
      } else {
          this.events.set(event, [cb])
      }
  
      return {
          unsubscribe: () => {
            this.events.get(event).splice(this.events.length-1,1)
          }
      };
    }
  
    emit(event, args = []) {
        if(this.events.get(event)){
          const callbacks = this.events.get(event);
          const result = callbacks.map(cb=>cb(...args))
          return result;
        }
  
        return [];
    }
  }
  
  /**
   * const emitter = new EventEmitter();
   *
   * // Subscribe to the onClick event with onClickCallback
   * function onClickCallback() { return 99 }
   * const sub = emitter.subscribe('onClick', onClickCallback);
   *
   * emitter.emit('onClick'); // [99]
   * sub.unsubscribe(); // undefined
   * emitter.emit('onClick'); // []
   */