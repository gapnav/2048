export default function(init_val) {
  this.canJoinWith = (other) => {
    return this.value === other.value;
  }

  this.joinWith = (other) => {
    if (this.canJoinWith(other)){
      this.value += other.value;
      return this.value;
    } else {
      return null;
    }
  }

  let initValue = (val) => {
    if (typeof val === 'undefined'){
      setRandomValue();
    } else {
      sanitizeValue(val);
    }
  }

  let setRandomValue = () => {
    let rnd = Math.random();
    let val = 2;
    if (rnd > 10 / 11) {
      val = 4;
    }
    this.value = val;
  }

  let sanitizeValue = (val) => {
    let result = parseInt(val);
    if (result) {
      let log2 = Math.log2(result);
      if (!log2 || log2 < 2 || Math.ceil(log2) !== log2) result = null;
    }
    if (result) {
      this.value = result;
    } else {
      throw 'Wrong CellNumber value ' + val;
    }
  }

  initValue(init_val);
}
