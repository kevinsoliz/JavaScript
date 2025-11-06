//dos objectos: HtmlElemeny y HtmlSelecetElement que una dropdown list.
//Tenemos prototypical inheritance: el padre HtmlElement

//HtmlElement tiene un method: click(),
//En su prototipo hay otro method: focus();
//al crear un nuevo objeto, tendremos una instancia de click y otra de focus

function HtmlElement(){
    this.click = function(){
        console.log('clicked');
    }
}


HtmlElement.prototype.focus = function(){
    console.log('focused');
}


function  HtmlSelectElement(array = []){
    this.addItem = function(item){
        array.push(item);
    }

    this.items = array;

    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render1 = function(){
        let html = "<select>";
        for(let element of this.items){
            html += "<option>" + element + "</option>";
        }
        html += "</select>";
        return html;
    }

    //Pro:
    this.render = function(){
        return `
<select>${this.items.map(item => `
    <option>${item}</option>`).join('')}
</select>`;
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;



function HtmlImageElement(src = ""){
    this.src = src;
    this.render = function(){
        return `<img src="${this.src}"/>`;
    }

}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;


//Lo que me está pidiendo es que HtmlSelcetElement tenga como proptotipo HtmlElement y herede click y este a su vez herede focus de su prototipo.
const s = new HtmlSelectElement([1,2,3]);
const img = new HtmlImageElement();

const elements = [
    new HtmlSelectElement([1,2,3]),
    new HtmlImageElement('http://')
];

for(let element of elements)
    console.log(element.render());