const { DIGIT_WORD, LARGE_NUMBER } = require('./enum');

class NumberToWords {
  constructor() {
    this.digit = DIGIT_WORD;
    this.largeNumber = LARGE_NUMBER;
  }

  ToWords(number) {
    number = parseInt(number, 10);
    if (number === 0) return 'NOL';
  
    const chunks = this.SplitToThousand(number);
    const totalChunks = chunks.length;
  
    const result = chunks
      .map((chunk, index) => {
        if (chunk === 0) return null;
  
        const chunkWords = this.ConvertChunk(chunk);
        const magnitudeIndex = totalChunks - 1 - index;
        const magnitude = this.largeNumber[magnitudeIndex] || '';
  
        return chunkWords + (magnitude ? ' ' + magnitude : '');
      })
      .filter(Boolean)
      .join(' ');
  
    return result.trim().replace(/\s+/g, ' ');
  }

  SplitToThousand(number) {
    const str = number.toString();
    const chunks = [];

    for (let i = str.length; i > 0; i -= 3) {
      const start = Math.max(i - 3, 0);
      chunks.unshift(parseInt(str.slice(start, i), 10));
    }

    return chunks;
  }

  ConvertChunk(num) {
    let words = '';
    const hundreds = Math.floor(num / 100);
    const tensUnits = num % 100;

    if (hundreds > 0) {
      words += (hundreds === 1) ? 'SERATUS' : this.digit[hundreds] + ' RATUS';
    }

    if (tensUnits > 0) {
      if (words) words += ' ';

      if (tensUnits < 10) {
        words += this.digit[tensUnits];
      } else if (tensUnits >= 10 && tensUnits < 20) {
        if (tensUnits === 10) {
          words += 'SEPULUH';
        } else if (tensUnits === 11) {
          words += 'SEBELAS';
        } else {
          words += this.digit[tensUnits % 10] + ' BELAS';
        }
      } else {
        const tens = Math.floor(tensUnits / 10);
        const unit = tensUnits % 10;
        words += this.digit[tens] + ' PULUH';
        if (unit > 0) {
          words += ' ' + this.digit[unit];
        }
      }
    }

    return words;
  }
}

module.exports = NumberToWords;
