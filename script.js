function firstChar(text) {
  // your code here
	if(text==' '){
		return " ";
	}
	else{
		for(let i=0;i<text.length;i++){
			if(text[i]==' '){
				continue;
			}
			else{
				return text[i];
				break;
			}
		}
	}
}

// Do not change the code below

const text = prompt("Enter text:");



alert(firstChar(text));
