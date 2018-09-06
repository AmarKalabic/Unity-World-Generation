#pragma strict

public class BlockSelecting extends MonoBehaviour {

private var tempColor : Color;

public var distance : float;

public var shouldPaint : boolean;

function Start () {

}

function Update () {

}

function OnMouseEnter()
 {
     tempColor = GetComponent.<Renderer>().material.color;
     var playerObject = GameObject.Find("Heroj");
     distance = Vector3.Distance(gameObject.transform.position, playerObject.transform.position);
     var block_type = gameObject.GetComponent(Blok).choice.ToString();
     if (distance <= 1.5 && block_type != "Bottomstone")
     {
     GetComponent.<Renderer>().material.color = Color.gray;
     shouldPaint = true;
     }
 }
function OnMouseExit()
 {
   if (shouldPaint){
     GetComponent.<Renderer>().material.color = tempColor;
     }
 }
}