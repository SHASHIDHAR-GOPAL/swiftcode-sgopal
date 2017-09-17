package data;
//Same class for both user and bot message//differentiated using sender property//sender.bot or sender.user
public class Message
{
    public String text;
    public FeedResponse feedResponse;
    public Sender sender;
    public enum Sender{
        BOT, USER
    }
}
