#pragma strict

public class BlokSistem extends MonoBehaviour {


private var playersInv : Inventory;

var startTime : float;

var digtime : float;

var digtime_start : float = 0.0;

public var isDigging : boolean = false;

public var hovering : boolean = false;

var windowTexture : Texture;

public var xpos : float;
public var ypos : float;

public var grounded : boolean;

function OnTriggerEnter2D(colenter : Collider2D)
{

	grounded = true;
}

function OnTriggerExit2D(colexit : Collider2D)
{
	grounded = false;
}


function Start()
{
}

function Update()
{
	var hit : RaycastHit2D = Physics2D.Raycast(GetComponent.<Camera>().ScreenToWorldPoint(Input.mousePosition), Vector3.forward);
	if (hit != null && hit.collider != null && hit.collider.gameObject != null && hit.collider.gameObject.tag == "blok")
	{
	var distance : float = hit.collider.gameObject.GetComponent(BlockSelecting).distance;
	var block_type = hit.collider.gameObject.GetComponent(Blok).choice.ToString();
	
	if (!Input.GetMouseButton(0))
    {
        digtime_start = Time.timeSinceLevelLoad;
    }

    if ((digtime_start + digtime < Time.timeSinceLevelLoad) && (digtime != 0.0))
    {
    if (distance <= 1.5 && block_type != "Bottomstone")
    {
       var block_pickup = new GameObject(block_type + "_pickup", typeof(SpriteRenderer), typeof(CircleCollider2D), typeof(BoxCollider2D), typeof(Rigidbody2D));
       block_pickup.GetComponent(BoxCollider2D).size = Vector2(1,1);
       block_pickup.GetComponent(BoxCollider2D).offset = Vector2(0.5,0.5);
       block_pickup.GetComponent(CircleCollider2D).radius = 0.05;
       block_pickup.transform.localScale = Vector3(0.2, 0.2, 0.2);
       block_pickup.transform.position = hit.collider.gameObject.transform.position;
       if (!grounded)
       {
       		block_pickup.GetComponent.<Rigidbody2D>().AddForce(Vector2.zero * 2);
			grounded = true;
       }
       block_pickup.tag = "pickup";
       block_pickup.AddComponent.<Item>();
       block_pickup.AddComponent.<ItemEffect>();
       var itemcomp = block_pickup.GetComponent(Item);
       itemcomp.canGet = true;
       itemcomp.stackable = true;
       block_pickup.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Blokovi/Pickups/" + block_type.ToLower()) as Texture2D, Rect(0, 0, 15, 15), Vector2(0.015, 0.015), 15);
       itemcomp.itemIcon = Resources.Load("Blokovi/Pickups/" + block_type.ToLower()) as Texture2D;
       itemcomp.isEquipment = false;
    Destroy(hit.collider.gameObject);
    digtime_start = Time.timeSinceLevelLoad;
    }
    }
    }

	if (Input.GetMouseButtonDown(0))
	{
		if (hit)
		{
		Debug.Log("HIT" + hit.collider.gameObject.tag);
			if (hit.collider.gameObject.tag == "blok")
			{
			    var name = hit.collider.gameObject.GetComponent(Blok).choice.ToString();
			    switch(name)
			          {
			          case "Dirt":
			               digtime = 1.5;
			               break;
			          case "Grass":
			               digtime = 1.8;
			               break;
			          case "Stone":
			               digtime = 2.6;
			               break;
			          case "Coal":
			               digtime = 2.9;
			               break;	
			          case "Iron":
			               digtime = 3.3;
			               break;
			          case "Gold":
			               digtime = 3.6;
			               break;
			          case "Diamond":
			               digtime = 3.9;
			               break;
			          case "Bottomstone":
			               digtime = 99999.5;
			               break;
			          }

		}
		else
		{
			return;
		}
	}
	}
	else if (Input.GetMouseButtonUp(0)){
	     if (!isDigging)
		 {
			digtime_start = Time.timeSinceLevelLoad;
		 }
	}
	//}
	//}
	else if (Input.GetMouseButtonDown(1))
	{
	if (!hit)
	{
			var instanceBlock : GameObject;
			var block = new GameObject("blok_placed", typeof(SpriteRenderer), typeof(CircleCollider2D), typeof(BoxCollider2D));
            block.GetComponent(BoxCollider2D).size = Vector2(1,1);
            block.GetComponent(CircleCollider2D).radius = 0.5;
            block.tag = "blok";
            block.GetComponent(SpriteRenderer).sortingLayerName = "blokovi";
            block.AddComponent.<BlockSelecting>();
            block.AddComponent.<Blok>();
            block.AddComponent.<InventoryHandler>();
            var selectedBlock = block.GetComponent(InventoryHandler).selectedBlock;
            Debug.Log("Item name iz BlokSistema: " + selectedBlock);
            if (selectedBlock == "Dirt")
            {
            block.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(0, 175, 25, 25), Vector2(0.5, 0.5), 25);
            }
            else if (selectedBlock == "Grass")
            {
            block.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(25, 175, 25, 25), Vector2(0.5, 0.5), 25);
            }
            else if (selectedBlock == "Stone")
            {
            block.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(50, 175, 25, 25), Vector2(0.5, 0.5), 25);
            }
            else if (selectedBlock == "Coal")
            {
            block.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(50, 175, 25, 25), Vector2(0.5, 0.5), 25);
            }
            else if (selectedBlock == "Iron")
            {
            block.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(0, 150, 25, 25), Vector2(0.5, 0.5), 25);				
            }
            else if (selectedBlock == "Diamond")
            {
            block.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(0, 125, 25, 25), Vector2(0.5, 0.5), 25);
            }
            else if (selectedBlock == "Bottomstone")
            {
            block.GetComponent(SpriteRenderer).sprite = Sprite.Create(Resources.Load("Sprites/blocks") as Texture2D, Rect(75, 175, 25, 25), Vector2(0.5, 0.5), 25);
            }
            else
            {
            Debug.Log("Couldn't find this block type.");
            }
            block.transform.position = GetComponent.<Camera>().ScreenToWorldPoint(Input.mousePosition) + Vector3(0,0,10);
            block.transform.position.x = Mathf.Round(block.transform.position.x);
			block.transform.position.y = Mathf.Round(block.transform.position.y);
            
	}else{
	     return;
	     }
	}
}
}