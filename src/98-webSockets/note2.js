//sending messgae is simple - adding context of it is the thing;

//ENVELOP PATTERN

{
    type: "CHAT_MESSAGE",
    id:"uuis-123",
    payload: {text:"hello" , roomId:"general"},
    metadata: {sendAt: 4646454}
}

// TYPE -BASED COMMANDS -> CHAT/TYPING/USER JOINF/DASHBORDS/COLLABORATIVE TOOLS

// TOPIC BASED -> DYNAMIC  tickers/live markets/sports engines
{topic:"stock:AAPL", data: {price:100.12}}
{topic:"game:team1-team2", data: {score:10-15}}

// 2 TYPES JSON/BINARY-------------------------------------------------------------

//JSON -> EASY/READABLE/DEBUG/FLEXIBLE
//BINARY -> HIGH FREQ GPS/MOUSE MOVEMNTS/AUDIO CHUNKS/GAMES STATES - FAST

// PATTERNS------------------------------------------------------------------------

//BROADCAST - ONE TO ALL -> GLOBAL ALERTS
//UNICAST - ONE TO ONE -> ONE GETS AT A TIME (SO REGUSTY WITH USER ID TO FIND AND MAP) -> PRIVATE MESSAGES
//MULTICAST - ONE TO MANY - GROUP CHAT

//PUB-SUB -> SUBSCRIBE FOR MESSAGE -> REDIS MESSAGE BROKER             