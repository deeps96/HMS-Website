import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extensionPipe'
})
export class ExtensionPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
	if (value.indexOf('.') == -1){
		return value;
	}
    return value.substring(0, value.indexOf('.'))
  }

}
