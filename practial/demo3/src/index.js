import React from 'react';
import ReactDom from 'react-dom';
import"./index.css"
//how react Runs using array

var row =[];
var child=[];
var box1=[];
var box2=[];

for(let k=0;k<8;k++)
{
	if(k%2==0)
	{
	box1.push(<div className="box-even"></div>)
}
else
{
	box1.push(<div className="box-odd"></div>)
}
}
for(let k=0;k<8;k++)
{
	if(k%2==0)
	{
	box2.push(<div className="box-odd"></div>)
}
else
{
	box2.push(<div className="box-even"></div>)
}
}

for(let j=0;j<2;j++)
{
	console.log(j)
	child.push(<div className="row-child">{box1}{box2}</div>)
}

for(let i=0;i<2;i++)
{
	console.log(i)
	row.push(<div className="row">{child}</div>)
}

ReactDom.render(
<React.Fragment>
<h1 >Chess board</h1>
<div id="outer">
{row}
</div>
</React.Fragment>,
	document.getElementById('root'));