
// convert number into kb/mb/gb string
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
})
export class FilesizePipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (value === undefined) {
      return 'N/A';
    } else if (value < 1024) {
      return value + ' Bytes';
    } else if (value < 1048576) {
      return (value / 1024).toFixed(1) + ' KB';
    } else if (value < 1073741824) {
      return (value / 1048576).toFixed(1) + ' MB';
    } else {
      return (value / 1073741824).toFixed(1) + ' GB';
    }
  }
}

// convert number into date time format
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamp',
})
export class TimestampPipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (value === undefined) {
      return 'N/A'; // or any other default value
    }

    let date = new Date(value);
    let day = ('0' + date.getDate()).slice(-2);
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    let hours = ('0' + date.getHours()).slice(-2);
    let minutes = ('0' + date.getMinutes()).slice(-2);

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
}

