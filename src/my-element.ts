import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    foo = {"firstName":"Jayce","lastName":"Domenic_Kuhn81","email":"Gladyce.Weber@yahoo.com"};

    

    render() {
        return html
        `<style>
        .s1{
        color:#90EE90;
        font-size:48px;
        background-color:#ADD8E6;
        }
        .s2{
        color:#F08080;
        font-size:48px;
        background-color:#ADD8E6;
        }
        .s3{
            color:#00BFFF;
            font-size:48px;
            background-color:#ADD8E6;
            }

        </style>
        
            <h1 class="s1">${this.foo.firstName}</h1>
            <h2 class="s2">${this.foo.lastName}</h2>
            <p class="s3">${this.foo.email}</p>`;
        
    }

    firstUpdated(changedProperties:any) {
        changedProperties.forEach((oldValue:any , propName:any) => {
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        fetch('api/user')
            .then((response) => response.json())
            .then((bodyRes) => this.foo = bodyRes);

    }
}
