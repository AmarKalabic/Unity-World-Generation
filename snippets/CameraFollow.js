#pragma strict

public class CameraFollow extends MonoBehaviour {
 
     var player : Transform;
 
     function Start ()
     {
         var camera = GameObject.FindWithTag("MainCamera");
         var player = GameObject.FindWithTag("Player").transform;
     }
     
     function Update () 
     {
         var playerpos : Vector3 = player.position;
         playerpos.z = transform.position.z; 
         transform.position = Camera.main.ScreenToWorldPoint(playerpos);
         GetComponent.<Camera>().transform.position = playerpos;
     }
 }