#pragma strict

public class World extends MonoBehaviour {
   
    function Start () { 
	   Debug.Log("***"); 
       chunk = new GameObject("chunk");
       spawnPoint = chunk.transform.position;
       var block = new GameObject("blok", typeof(SpriteRenderer), typeof(CircleCollider2D), typeof(BoxCollider2D));
       block.GetComponent(BoxCollider2D).size = Vector2(1,1);
       block.GetComponent(CircleCollider2D).radius = 0.5;
       block.tag = "blok";
       block.GetComponent(SpriteRenderer).sortingLayerName = "blokovi";
       block.AddComponent.<Blok>();
       block.AddComponent.<BlockSelecting>();
       for (var w : int = 0; w < chunkWidth; w++) {
            for (var h : int = 0; h < chunkHeight; h++) {
                 var blockInstance = Instantiate(block, Vector2(w,h), Quaternion.identity);
                 blockInstance.transform.parent = chunk.transform;
            }
       }
       Destroy(block);
       chunk.transform.position.x = -Mathf.Round(chunkWidth/2);
       Instantiate(chunk, Vector2(chunk.transform.position.x - chunkWidth, chunk.transform.position.y), Quaternion.identity);
       Instantiate(chunk, Vector2(chunk.transform.position.x + chunkWidth, chunk.transform.position.y), Quaternion.identity);
       leftIndicator = spawnPoint - Vector2(chunkWidth, 0);
       rightIndicator = spawnPoint + Vector2(chunkWidth, 0);
   }
   
   private var chunk : GameObject;
   public var blok : GameObject;
   public var BlockType : GameObject;
   var chunkWidth : int;
   var chunkHeight : int;
   private var spawnPoint : Vector2;
   private var leftIndicator : Vector2;
   private var rightIndicator : Vector2;

   function Update () {
       var player = GameObject.FindWithTag("Player");
       if (player.transform.position.x < leftIndicator.x) {
      		  chunk = new GameObject("chunk");
     	      spawnPoint = chunk.transform.position;
       		  var block = new GameObject("blok", typeof(SpriteRenderer), typeof(CircleCollider2D), typeof(BoxCollider2D));
      		  block.GetComponent(BoxCollider2D).size = Vector2(1,1);
      		  block.GetComponent(CircleCollider2D).radius = 0.5;
      		  block.tag = "blok";
      		  block.GetComponent(SpriteRenderer).sortingLayerName = "blokovi";
      		  block.AddComponent.<Blok>();
      		  block.AddComponent.<BlockSelecting>();
       		 for (var w : int = 0; w < chunkWidth; w++) {
       		      for (var h : int = 0; h < chunkHeight; h++) {
       		           var blockInstance = Instantiate(block, Vector2(w,h), Quaternion.identity);
       		           blockInstance.transform.parent = chunk.transform;
       		      }
       		 }
       		 Destroy(block);
      		 Instantiate(chunk, leftIndicator - Vector2(chunkWidth + chunkWidth/2, 0), Quaternion.identity);
       		 Destroy(chunk);
      		 leftIndicator.x -= chunkWidth;
       }
       if (player.transform.position.x > rightIndicator.x) {
           //Instantiate(chunk, rightIndicator + Vector2(chunkWidth - chunkWidth/2, 0), Quaternion.identity);
       		 chunk = new GameObject("chunk");
      		 var block1 = new GameObject("blok", typeof(SpriteRenderer), typeof(CircleCollider2D), typeof(BoxCollider2D));
       		 spawnPoint = chunk.transform.position;
       		 block1.GetComponent(BoxCollider2D).size = Vector2(1,1);
       		 block1.GetComponent(CircleCollider2D).radius = 0.5;
       		 block1.tag = "blok";
      		 block1.GetComponent(SpriteRenderer).sortingLayerName = "blokovi";
      		 block1.AddComponent.<Blok>();
       		 block1.AddComponent.<BlockSelecting>();
       		 for (var w1 : int = 0; w1 < chunkWidth; w1++) {
       		      for (var h1 : int = 0; h1 < chunkHeight; h1++) {
         		         var blockInstance1 = Instantiate(block1, Vector2(w1,h1), Quaternion.identity);
         		         blockInstance1.transform.parent = chunk.transform;
          		   }
       		 }
      		  Destroy(block1);
     		  Debug.Log(chunkWidth);
       		  Instantiate(chunk, rightIndicator + Vector2(chunkWidth - chunkWidth/2, 0), Quaternion.identity); 
      		  Destroy(chunk);
           	  rightIndicator.x += chunkWidth;
       }
   }
 
}