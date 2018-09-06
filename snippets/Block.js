#pragma strict


public class Blok extends MonoBehaviour {
	function OnTriggerEnter2D (colenter : Collider2D) {
		if (colenter.gameObject.tag == "Identifier") {
			gameObject.GetComponent(SpriteRenderer).enabled = true;
		}
	}
	
	function OnTriggerExit2D (colenter : Collider2D) {
		if (colenter.gameObject.tag == "Identifier") {
			gameObject.GetComponent(SpriteRenderer).enabled = false;
		}
	}
	
	enum BlockType {Dirt, Grass, Stone, Coal, Iron, Diamond, Bottomstone}
	var choice : BlockType;
	
	public var hovering : boolean = false;

	var windowTexture : Texture;

	public var xpos : float;
	public var ypos : float;
	
	function Start () {
	    
	    var world = GameObject.FindWithTag("MainCamera").GetComponent(World);
	    
	    

		     if (gameObject.transform.position.y < (world.chunkHeight - 1)) {
		     	choice = BlockType.Dirt;
		     }
		     if (gameObject.transform.position.y >= (world.chunkHeight - 1)) { 
	     			choice = BlockType.Grass;
	     	}
		     if (gameObject.transform.position.y < (world.chunkHeight - world.chunkHeight/2)) {
		     	if (gameObject.transform.position.y >= (world.chunkHeight - world.chunkHeight/2 - world.chunkHeight/4)) {
		     		var prob_a : int = Random.Range(1,12);
		     		if (prob_a == 1) {
			     		choice = BlockType.Coal;
	     			}
		     		else if (prob_a == 2) {				
		     		     choice = BlockType.Iron;
		     		}
		     		else {
		     			choice = BlockType.Stone;
			     	}
	     		}
     		}
	     	if (gameObject.transform.position.y < (world.chunkHeight - world.chunkHeight/2 - world.chunkHeight/4)) {
	     		if (gameObject.transform.position.y >= (world.chunkHeight - world.chunkHeight + 1)) {
	     			var prob_b : int = Random.Range(1,24);
	     			if (prob_b == 1) {
	     				choice = BlockType.Diamond;
			     	}
		     		else {
	     				choice = BlockType.Stone;
	     			}
	     		}
		     }
	     	if (gameObject.transform.position.y < (world.chunkHeight - world.chunkHeight + 1)) {
     			choice = BlockType.Bottomstone;
	     	}	
	     	switch(choice)
                 {
	     	     case BlockType.Dirt: 
 	     	        gameObject.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(0, 175, 25, 25), Vector2(0.5, 0.5), 25);
 	     	        choice = BlockType.Dirt;
 	     	        break;
  	     	     case BlockType.Grass:
  	     	         gameObject.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(25, 175, 25, 25), Vector2(0.5, 0.5), 25);
    	     	     choice = BlockType.Grass;
    	     	     break;
    	     	 case BlockType.Stone:
    	     	     gameObject.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(50, 175, 25, 25), Vector2(0.5, 0.5), 25);
    	     	     break;
	     	     case BlockType.Coal: 
 	     	        gameObject.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(50, 175, 25, 25), Vector2(0.5, 0.5), 25);
 	     	        break;
  	     	     case BlockType.Iron:
  	     	         gameObject.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(0, 150, 25, 25), Vector2(0.5, 0.5), 25);				
    	     	     break;
    	     	 case BlockType.Diamond:
    	     	     gameObject.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(0, 125, 25, 25), Vector2(0.5, 0.5), 25);
    	     	     break;  
    	     	 case BlockType.Bottomstone:
    	     	     gameObject.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(75, 175, 25, 25), Vector2(0.5, 0.5), 25);
    	     	     break;    	     	     
   	     	     default:
     	     	     Debug.Log("Couldn't find this block type.");
      	     	     break;
                 } 
  }
	
	function Update () {
		
	}
}