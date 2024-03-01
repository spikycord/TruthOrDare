import Head from "next/head";
import { Gear, UserList } from "@phosphor-icons/react";
import RerollQuestionButton from "@/components/RerollQuestionButton";
import SettingButton from "@/components/SettingButton";
import Chip from "@/components/Chip";
import { useEffect, useState } from "react";
import GameSetting, { type Setting } from "@/components/Modals/GameSetting";
import AddPlayer from "@/components/Modals/AddPlayer";
import RerollPlayerButton from "@/components/RerollPlayerButton";

export default function Home() {
  const [openGameSetting, setOpenGameSetting] = useState(false);
  const [openAddPlayer, setOpenAddPlayer] = useState(false);

  const [setting, setSetting] = useState<Setting>({
    mode: "PG-13",
    gameSetting: "Truth or Dare",
  });
  const [playerList, setPlayerList] = useState<string[]>([]);
  const [quote, setQuote] = useState("");
  const [playerSelected, setPlayerSelected] = useState<string>("");

  useEffect(() => {
    const quote = getRandomQuote(setting);
    setQuote(quote ? quote : "");
  }, []);

  return (
    <>
      <Head>
        <title>Truth or Dare</title>
        <meta name="description" content="Truth Or Dare App" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <div className="relative h-[100vh] w-[100vw]">
        <div className="flex h-full w-full justify-center bg-primary p-2 px-4">
          <GameSetting
            setModal={setOpenGameSetting}
            setting={setting}
            setSetting={setSetting}
            className={`transition-gpu duration-500 ${
              openGameSetting ? " scale-100" : "scale-0"
            }`}
          />
          <AddPlayer
            setModal={() => setOpenAddPlayer(false)}
            playerList={playerList}
            setPlayerList={setPlayerList}
            className={`transition-gpu duration-500 ${
              openAddPlayer ? " scale-100" : "scale-0"
            }`}
          />
          <div
            className={`flex h-full w-[600px] flex-col items-center justify-center sm:gap-4 ${
              openGameSetting || openAddPlayer ? "blur-sm" : ""
            }  gap-6`}
          >
            <div className="text-4xl font-semibold text-white">
              {playerSelected === ""
                ? "Truth or Dare"
                : `${playerSelected}'s Turn`}
            </div>
            <div className="flex gap-2 text-sm text-white">
              <SettingButton
                Icon={Gear}
                content="Game Setting"
                onClick={() => setOpenGameSetting(true)}
              />
              <SettingButton
                Icon={UserList}
                content="Add Players"
                onClick={() => setOpenAddPlayer(true)}
              />
            </div>
            <div className="flex w-full gap-2 text-[10px] text-white">
              <Chip content={setting.gameSetting.toUpperCase()} />
              <Chip content={setting.mode.toUpperCase()} />
            </div>
            <div className="w-full text-[18px] text-white">
              {quote ? quote : "No quote"}
            </div>
            <div className="mt-6 flex w-full flex-col gap-4">
              <RerollQuestionButton
                content={
                  playerList.length === 0
                    ? "Reroll Question"
                    : "Reroll Question with Player"
                }
                onClick={
                  playerList.length === 0
                    ? () => setQuote(getRandomQuote(setting) ?? "")
                    : () => {
                        const player =
                          playerList[
                            Math.floor(Math.random() * playerList.length)
                          ];
                        setPlayerSelected(player ?? "");
                        setQuote(getRandomQuote(setting) ?? "");
                      }
                }
              />
              {playerList.length > 0 && (
                <div className="flex w-full gap-4">
                  <RerollPlayerButton
                    content="Reroll Question"
                    onClick={() => setQuote(getRandomQuote(setting) ?? "")}
                  />

                  <RerollPlayerButton
                    content="Reroll Player"
                    onClick={() => {
                      const player =
                        playerList[
                          Math.floor(Math.random() * playerList.length)
                        ];
                      console.log(player);
                      setPlayerSelected(player ?? "");
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function getRandomQuote(setting: Setting) {
  const data = {
    Truth: {
      PG: TruthPG,
      "PG-13": TruthPG13,
      R: TruthR,
      GAY: TruthGAY,
    },
    Dare: {
      PG: DarePG,
      "PG-13": DarePG13,
      R: DareR,
      GAY: DareGAY,
    },
  };

  const { mode, gameSetting } = setting;
  let gameSet = gameSetting;
  if (gameSet === "Truth or Dare") {
    gameSet = Math.random() > 0.5 ? "Truth" : "Dare";
  }
  const quotes = data[gameSet][mode];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}

const DarePG13Text = `Send 5 pleading emojis to the last person you DMed
Pair everyone here up into couples.
Where are you on the straight-gay spectrum? Be honest!
Send the 8th person in your DMs something embarrassing.
Kiss the player you think looks the cutest.
Send the pleading emoji to the 2nd person in your DMs
Exchange a clothing item with the player on your right.
Kiss someone of your same gender.
Text your crush 'I love you'.
Describe your first partner.
Tell the group about your worst experience on a date.
Propose to someone in the group
Tell us your cheesiest pick-up line.
Act like an animal for the next minute
Call someone you're playing with 'mommy' or 'daddy'
Show the last DM you sent without context
Do whatever someone else wants for the rest of the day.
Call your crush and try to make conversation for a minute.
Kiss someone for 1 minute.
Send every curse word you can think of in chat.
Show the group a picture of one person you find very attractive.
Rate everyone here 1-10 in terms of looks.
Send a paragraph to your crush about 3 things you love about them.
Tell the last person you texted that you're pregnant/got someone pregnant.
List three things you like about your crush.
Yell a swear word really loudly
Sit on the lap of the person you like for 5 mins.
Tell your crush that you like them
Act like a furry to the 5th person in your DM list's DMs
Tell your crush you hate them.
Slap your face.
Call your crush and serenade them.
Change your Discord PFP to whatever the group decides.
Sit in the lap of the person to your left for 3 turns.
Lick the neck of the person next to you.
Send knee pics to the group.
Describe your crush, but don't give it away.
Text to your bff 'I kinda have a crush on you wanna go out?' And don't reply to any of their messages.
What is your favorite thing about the opposite gender (or the gender that you are attracted to?)
Show the last text message you have received without context .
Text your ex and ask them 'How's it going?'.
Pretend to date someone for a day.
Write a love poem to the first person in the offline list
Ask someone in this server out on a date.
Kiss the person who you think is the best friend to you.
Send a text to your crush explaining your favorite movie plot in vivid detail.
Have you ever kissed someone in public
Tell the 3rd person in your DMs that you love them
Tell everyone about your last kiss.
Text your crush about how much you like them, but don't reply to them after that.
Slap the last person who talked besides yourself.
Change your status to "I'm a furry, deal with it uwu"
Ask someone out of a gender you aren't attracted to.
Lick the wall.
Sit on one person's lap for two minutes.
Ask your crush who they have a crush on.
Tell your crush that you don't love them.
Send your partner a fake breakup message.
Send the most furry-like message possible
Let someone go through your Amazon purchase history and read it out to the group.
Kiss the person to your left, either on the hand or cheek.
Rate everyone here 1-10 in terms of personality.
Let someone go through your YouTube history and read it out to the group.
Hold hands with the player on your right for 3 minutes.
Lick someone's hand.
Curse as badly as you can for 20 seconds.
`;

const TruthPG13Text = `Do you have any tattoos or piercings?
At what age did you learn that the other gender have different genitals?
What is your biggest turn off in a partner?
If you had to choose, who would you pick to exchange your girlfriend/boyfriend with?
Have you ever had a crush on someone here?
Have you ever had a wardrobe malfunction?
Who do you miss seeing the most?
How far would you go on a first date?
Have you ever had a same-sex crush?
What is the most attractive quality in a partner?
Have you ever written a fanfiction?
Whose voice do you like the most?
Who's the most attractive person you know?
Do you remember your first crush?
How old is the oldest person you've dated?
What personality traits would cause you to end a friendship?
What is the last letter in the name of your crush?
What's your favorite thing about your crush?
Who's your 'celebrity crush'?
What would you do to let someone that you are interested in know that you like them?
Who here do you want to cuddle with the most?
If you could only pick one swear word to use for the rest of your life, what would it be?
Have you ever stalked someone? If you have, who was it?
When was the last time you were daydreaming about someone you admire?
Who's the oldest person you've dated?
Why did your last relationship end?
What's the most romantic thing you've ever done?
What’s something that gives you the ick about a person?
What is the first letter in the name of your crush?
What's something you find attractive that others may not?
Have you ever lied to your partner about being with others before or during your relationship?
What's the craziest thing you would do to make a crush like you back?
Have you ever spread a false rumor on purpose?
Who's more attractive, you or your best friend?
Have you ever got caught cheating on an assignment?
What's the most embarrassing thing in your web history?
Would you ever swap partners with anyone?
Have you ever made out in an elevator?
What would you do on the perfect first date?
What's your dream gift for Valentine's?
Which two people here would make the best couple?
Do you believe there is only one other person in the world for you or many?
What Disney character do you think is the hottest?
Who do you secretly think is hot?
Have you ever pressed charges on anyone?
Why wouldn't you marry your current partner?
What's your ideal person to date like?
What secret about yourself did you tell someone in confidence and then they told a lot of people?
How was your first kiss?
What's one thing you dislike about the opposite/different gender?
What's something you're glad your family doesn't know about you?
Who in this room do you most want to see in a bikini?
Have you ever stolen money from your roommate?
Have you ever kissed a friend's sibling?
What was your worst kiss?
Do you believe in love at first sight?
What's the stupidest thing you've done for a crush?
Would you let a friend look through your browsing history?
Have you ever been robbed?
When was the last time you peed your pants?
What is the most embarrassing thing that your parents have caught you doing?
What is your favorite thing about your partner?
Who was the first person you said "I love you" to?
What's the creepiest text you've gotten from a stranger?
Who would die first in a horror movie about this server?
Have you been in any fights at school?
What’s the first thing you’d do if you could inhabit the body of the opposite sex for one hour?
What's your favorite anime?
Why did you stop liking your previous crush?
How many people have you dated?
Have you ever had a crush on two people at the same time?
What's the biggest age difference of a crush you've had?
Have you ever taken a picture of someone hot in public?
What do you want your parents not to find out about the most?
Would you ever get a tattoo?
Where are you the most ticklish?
What do you like about your ex?
Do you have a crush on anyone here?
Who was your first crush?
What is the most romantic thing that has ever been done for you?
What do you remember most about your first crush?
Have you ever friendzoned someone?
Who has the best voice in the server?
Who would make your parents freak out if you brought them home?
How many parties have you thrown at your house?
What's the most embarrassing thing that's happened when you asked someone out?
Which two people here would make the worst couple?
What do you value most in a relationship?
How many exes numbers are currently in your phone?
Can you see yourself being married to the creepiest kid at your school someday?
In the group, who do you think fits the dumb role?
Have you ever thrown up in someone’s car?
Who is the most attractive person in the room?
Do you think you're attractive?
How often do you drink alcohol?
What is the thing that you shouldn't know but you know entirely about it?
Have you ever been caught checking someone out?
How do you prepare before a date?
Who from here would you date and why?
What do you look for in a partner?
What do you like to do that's traditionally considered masculine?
Have you ever smoked?
What are some things you don’t understand about the opposite sex?
Out of the last three people you texted, if you had to kiss one of them who would you pick?
If you could make out with one Disney character, who would it be?
Would you still love your significant other if they gained 100 pounds?
Who here would be the worst person to date?
Why did your last relationship break down?
Have you ever shoplifted?
Do you prefer to date people older or younger than you?
What was your funniest first date ever?
What is the most romantic thing that you have ever done?
Do you have a crush on anyone?
Would you break up with someone over text?
What's the first letter of your crush's name?
What was your worst nightmare?
Have you ever threatened someone other than your family or friends?
What's the most embarrassing thing you've done on a date?
Who's the hottest person at work or school?
Who was your worst kiss ever?
What was your absolute worst bathroom experience?
What's the most violent thing you've ever done?
Hot or not: belly button piercings?
What's the craziest thing that you have ever done without your parents knowing?
Would you still love your crush if they gained 100 pounds?
What's the biggest number of crushes you've had at one time?
Do you have trust issues?
What's your idea of a perfect, romantic date?
Have you ever been intimate in a public place?
What's something that your parents did to you that you will never do to your kids?
Does the thought of kissing the person to your left excite you?
What's your trick for getting attention from a crush?
What is your guilty pleasure?
Have you ever gone out without wearing a bra or underwear?
Have you ever peed around the toilet, but not in the hole?
Out of everyone here, who would you pick to date if you had to pick someone?
Would you ever go back with your ex?
What's something that would be horrible if your parents found out?
Which date do you prefer the most, breakfast date or dinner date?
Would you prefer to date someone younger or older than you?
What is the most expensive thing you have stolen?
What makes you fall in love with someone?
What is the biggest turn off in a partner?
Would you ever be polyamorous?
Would you fly in a plane to date someone?
Have you ever had a relationship you kept secret? Why?
What are some things you think about when sitting on the toilet?
When was the last time you had a hug?
What made you fall in love with your crush/partner?
Have you ever had a crush on a co-worker?
Would you ever date someone you met online?
Have you ever worn the same underwear for more than one day?
Do you have someone you miss a lot, but don't want to think about? why?
If you had to describe your body to someone else, what would you say?
How old were you when you had your first crush?
Who here are you most jealous of?
What's the most disgusting prank you've ever played?
Have you ever thought of cheating on your partner?
If you were stranded on an island, who is the one person you would want to be stuck with you?
How many times have you snuck out of the house?
Who would be the best partner here?
Would you stay naked at home if you lived alone?
If you had to kiss one person here, who would you pick?
Have your parents ever given you the 'birds and bees' talk?
Why did you break up with your last partner, and who broke up with who?
What was your most embarassing moment?
Do you love your partner?
What would be the first thing you do if you woke up as the opposite/different sex?
Have you ever kissed someone without permission?
Would you ever get back with an ex?
What's the most illegal thing you've ever done?
Who in the group would be the hottest in 15 years?
Who is your boyfriend/girlfriend/partner?
Have you ever embarrassed yourself in front of a crush?
What's something that you find cute that you think is underrated?
What is your biggest insecurity?
What is the craziest pick up line you have ever heard?
What's the riskiest thing you've done?
Have you ever been cheated on?
If you had to go on a date with someone in this room, who would it be?
What is the worst intimate experience that you have had?
Do you like anyone in this group more than a friend?
If you had to kill one person here, who would it be?
What's the first thing you would do if you found out you could become invisible?
Have you ever considered cheating?
What did you last search for on your phone web browser?
Do you simp for any streamers?
Do you love the person you're playing this with?
What would you do if your parents left the house to you for a whole week?
What was the most physically painful experience of your life?
Have you ever snuck anyone into the house?
What's something about your last relationship that you could have improved?
Why did you break up with your first girlfriend/boyfriend?
Do you prefer making a first step in relationship or do you prefer your SO to do it?
Who's the last person you simped for?
Have you ever asked someone out and got rejected? What happened?
Do you still have feelings for your ex?
What's the sketchiest thing you've seen/heard?
What is your favourite anime?
Have you gotten over your last partner? Have you *really* gotten over them?
What things are you shallow about?
Do you still have feelings for an ex?
Would you ever get on a dating website?
Have you ever had feelings for a friend or family member’s significant other?
Have you ever had a crush on anyone here?
Who here is best at flirting?
Have you ever sent someone to the hospital? If so, how?
Who would you pick to exchange your partner with if you had to choose?
When's the last time you sharted?
What action from your past would put you in jail if law enforcement ever found out about it?
Would you marry your partner?
What's the naughtiest thing you've done in public?
If you had to date anyone here who would it be?
Do you fall in love easily?
Have you ever been tempted to cheat on someone?
What happened on the worst day of your life?
How old is the youngest person you've dated?
What's the most embarrassing thing you've done in a taxi/carpool?
What would be important for a partner to know about you?
What's the stupidest thing you've done in front of someone you liked?
How many people have you kissed?
Would you kiss your best friend?
`;

const DarePGText = `Send a Snapchat to your ex.
Don't touch your phone for an hour after the game is over.
Play the last song you listened to. No lying!
Take a sniff of everyone playing.
Call your first DM for no reason
Eat a packet of hot sauce.
Play a song of the next person's choosing.
Name as many countries as you can
Google images of the first word that comes to your head and send the first image
Type a sentence about food with your eyes closed.
Prank call McDonalds
Sharpie an embarrassing message on any part of the body covered by clothing.
Text the last 6 people in your DMs 'I love you'.
Text the first six people in your message history 'a' and don't reply if they bring it up.
Send the most cringe message ever
Send a weird picture of yourself.
Send your crush something wholesome
Tweet '*insert popular band name here* fans are the worst' and don't reply to any of the angry comments.
Take a shot of mustard or ketchup.
Answer the next truth question with complete honesty
Name one thing you would change about each person here.
Make an owo emote for the group.
Use Discord light theme for an hour
Take a shot of lemon juice, and take one more every time someone picks dare.
Let the group decide your outfit for tomorrow.
Show the group an embarrasing picture of you.
Send a meme you've made
Hold your breath for 10 seconds
Show the group the insides of your closet.
Show everyone the earliest picture in your camera roll.
Make up a country song off the top of your head
Talk in an accent for the next 10 minutes.
Show everyone here the last 5 messages with the last person you messaged/messaged you.
Type with only one finger for the next minute
Have a matching pfp with who you like for 3 days.
Show everyone your DMs list
Link everyone to the last song you listened to.
Ask a friend for their mom's phone number
Name as many types of car as you can
Post the latest photo you took to instagram
Ask a random person in this server if you've met them before
Text your parents "something crazy just happened" and share what they say
Send your favorite meme
Block the fifth person in your DMs.
Text the third person in your message history 'last night was great' with a heart.
Call one of your parents and then tell them they are grounded for a week
Do a yoga pose for 3 minutes.
Make/bake a cake.
Call a random person and sing happy birthday to them
Are you a 'glass half full' or a 'glass half empty' person? (optimist or pessimist)
List the things on your desk
Sing a lullaby in VC.
Let the group look through your phone for 30 seconds.
Show everyone something you wrote/drew when you were younger.
Spin an imaginary hula hoop around your waist for 1 minute.
Hug the object/person nearest you.
Choose 3 people here and tell them the latest lie you told to them here (not in DMs).
Describe the last dream you had.
Post your favorite photo on your phone
Tell the other players something they don't know about you
Don't charge your phone until it dies.
Listen to a country song
Tell your best friend that you're a furry
Send a message to someone you haven't talked to in a year
Send the worst meme you've made
Ping a friend to join!
Try to lick your elbow
Eat an ice cube
Name something you've always wanted, but is too expensive to buy.
Let your friends post something on your social media
Name a famous person that you would like to be friends with.
Switch to Discord light mode for the rest of the day
Show everyone the funniest meme in your camera roll.
Send a sentence without the words: but, a, the, or
Stand up and spin in a circle three times.
Let the group pose you in an embarrassing position and take a picture.
Show everyone here the worst picture of you that you can find.
Show everyone the last picture in your camera roll.
Have someone in the group ask a question that you must answer
Prank call your best friend
Close your eyes and send a blind message to a random person
Have everyone here list something they like about you
Let someone here do your makeup.
Talk in a very deep voice for the next round
Hum a song of your choice, don’t stop until someone correctly guesses the song
Tell the group something about you that you've never told them before
Send a photo of your desk
Send the fifth person in your message history 20 seconds of keyboard spam.
Scream at the top of your lungs whatever the chat wants.
Try not to blink for as long as possible
Change your phone wallpaper to the choice of the group for 7 days.
Ask someone random for a hug
Post a selfie.
Eat a piece of paper.
Sing a song of the groups choice, in a VC.
Ghost ping the person you like.
Go to the first person you know on your instagram feed and like every photo on their profile.
List everything in your wallet
Say UWU for as long as possible
Send a message only using your toes
Voice act a cartoon character of the group's choice.
DM someone "hi" and respond with "banana" to everything they say
Put on makeup if you don't wear makeup and it's available, take off all your makeup if you're wearing it.
Do your best impersonation of the question asker or someone in the group.
Rickroll someone
Show everyone an embarrassing childhood picture of you.
Do an impression of your favorite celebrity
Send one of your favorite playlists!
Delete the last 10 pictures in your camera roll permanently (remove them from recently deleted too).
Call your parents and talk about the weather in a british accent
Screenshot your most played songs and show it to the group.
Send the last meme you saved to your phone
You know, I’ve always wondered... (fill in the blank)
Give your friends your unlocked phone for 30 seconds
Prank call your enemy
Everyone here take a snack break - ToD Bot team.
Name as many types of food as you can
Give yourself a haircut.
Breakdance for the group.
Screen share your search history from today.
Tell the other players something you've never told anyone before
Type as fast as you can for the next minute
Put ice in your clothes and wait until it melts.
Show the group your latest YouTube searches
Send a photo of where you are
Use your non-dominant hand for an hour
Talk with a Russian accent for the next 3 rounds
Lick the bottom of your shoe/foot.
Show your lock screen and wallpaper.
Share one of your playlists
Type without vowels for the next minute
Send your favorite joke
Take a picture of you doing over-done ducklips.
Let the group decide your status for 7 days.
Take a picture of yourself and show it to the group.
Let someone go through your YouTube history and read it out to the group.
Lick the floor.
Show the group an embarrassing photo from your childhood.
Spin around 10 times and try to walk straight.
Be really annoying for the next minute
Post the fanciest photo you've ever taken
Kiss someone of your same gender.
Talk about a time that you failed in life.
Everything you say for the next 5 rounds has to rhyme.
Prank call the last person that called you
Let the group choose your profile picture for the next day
List everyone as the emoji(s) you think best fits them.
Speak only in emojis for the next 5 minutes
Invite anyone in the group's choosing to join the call.
Tie your shoe strings together and try to walk to the door and back
Fake cry for the group.
Send the first word that comes to your mind right now
Make up a rap and sing it for 30 seconds
Show the list of people in your DMs.
Use a furry pfp for 24 hours
Imitate a behaviour of who you like.
Send a screenshot of the bottom of your DMs list
Try to tickle yourself
Do as many pushups or situps as you can in a minute.
Sing a song for the group.
Post the oldest photo on your phone
Wear a clothing item often associated with a different gender tomorrow
Ghost ping someone
Describe everyone in the room in three words.
Make a poem using the words orange and moose
Name as many cities as you can
Send a picture of the item closest to your phone.
Do an impression of your most annoying teacher
Show everyone here your last 10 google searches.
Send a song you're embarrassed to listen to
Draw a face around your belly button.
Share your phone's wallpaper
Show everyone your recent calls
Pretend to be another player for the next round
Send a picture of your favourite stuffed animal.
Send a passive-aggressive message to a friend
Name every ocean
Type with only the left side of your keyboard for the next minute
Show everyone the last YouTube video you watched.
Imitate your least favorite celebrity
List everyone as the kind of animal you see them as.
Show everyone here your screen time.
`;

const TruthPGText = `What was the nastiest joke you ever played on someone?
Do others think you are annoying?
What makes you happy?
If it's raining outside, what activity do you most want to do?
What doesn't exist, but should?
Who is one person you wish was still in your life?
Are you a left-handed or right-handed?
Are there any rules or social norms that piss you off?
Which famous person do you hate?
What is your favorite kind of music to listen to?
What's something that changed your perspective of life?
What is the worst present anyone has given you?
What is something you've always wanted to try but have been too scared of?
Have you changed since you met the others here?
What's something that you find difficult, but you think in your mind it should be easy?
Have you ever had someone write a paper for you?
What's the most embarrassing nickname you've ever had?
If you could learn when you die, would you?
Who do you have on your Facebook block or limited list?
Would you want to live forever if you could?
When was a time that you completely lost it?
If you could live anywhere in the world, where would you live?
What are 5 things you want to do before you die?
What's the strangest dream you've had?
In emergency situations, how do you react?
Would you break up with your partner for 1 million dollars? 1 billion?
What is the one thing that you never got the chance to do?
Have you ever worn the same clothes for more than three days?
How big of a simp are you?
What types of things do you procrastinate the most on?
If you had to change your name, what would you change it to?
Was there ever a time in your life that you thought you were going to die?
If given a chance would you propose someone here?
If you had to choose brains or beauty, which would you pick?
What is the best thing that can happen in the first 5 minutes after waking up?
If you could stop the time, what would you do?
What's the most difficult choice you were asked to make?
What's the TV show you binge-watched all day?
What do you wish everyone understood about you?
Have you ever gotten stitches?
Do you believe in ghosts? If so, are you scared of them?
What's one job you'll never work?
What is your favourite animal?
Do you have any memories before the age of five?
Is there anything that you’ve regretted spending money on?
Have you ever cheated on an exam?
Who is your least favorite person in this server?
What do you try to do to make the world a little better?
What's the story about the last time you cried?
What has been one of your most embarrassing moments?
What's the most embarrassing thing you've seen happen to someone else?
What's your favorite music genre?
What do you want to be when you grow up?
What compliment do you get the most?
Who is the easiest to talk to in this server?
What was the best thing you learned in the past year?
Who's your idol?
What was your last argument you had with someone about?
If you could be a professional athlete in any sport, what sport would you choose?
Have you ever peed in a swimming pool?
What's a funny story from your childhood?
What is your dream city to live in?
What have you been thinking about lately that has kept you up at night?
Do you have any chores?
What was your weirdest dream?
What was your most recent embarrassing moment?
When is the last time you talked about someone behind their back?
Where's the next place you want to visit?
What’s something you’re afraid to tell people?
What is your scariest imagination when you fall to sleep?
If you had only one more day to live, what would you do?
What is your favorite color?
What are your favorite Discord bots?
What do you love most about where you grew up?
Do you apologize after an argument?
What food would you never give up in a million years?
What is your most treasured memory?
Which do you like better, dogs or cats?
What is your favourite kind of clothing?
What emoji do you use waay too much?
What's the weirdest thing about you? Are you proud of it?
If you could say anything to one person in your life without any consequences, what would it be?
Have you ever thrown up on a plane?
Have you ever taken money from your roommate?
What was your last "ah-ha" moment?
What was the most embarrassing thing you accidentally texted to the wrong person?
Do you like mayonaise?
Who do you care about the most?
What's one thing you learned the "hard way"?
What's some small thing you recently noticed?
If you could be any animal, which one would you be?
What's a food you like that no one else does?
Are you afraid of dying?
What is the worst thing that somebody ever said to you?
Who do you always want to see smiling?
What do you like to do that's considered touristy?
What is the greatest accomplishment of your life?
Who's the last person you called by the wrong name?
Have you faked being sick to stay home from school?
Do you like furries?
What animal most resembles your personality?
What's a weird food combination you actually like?
When have you had to walk away in shame?
Do you have a dream job in mind? What would it be?
Who is your favourite singer?
Do you think you'd be a good parent?
What are the top three qualities you admire in others?
If there was no such thing as money, what would you do with your life?
What is your current go-to song to dance to when nobody is around?
Who in your family can you not believe you're related to?
What is a secret that you have never told anyone before?
If you write a book, what would it be about?
If you were given $10,000, what are 3 things you would buy?
Have you ever confessed to someone that you like them?
How many best friends do you have? Who is the bestest?
Do you have a reoccurring dream?
What would you like to be reincarnated as?
If you had to listen to one genre of music for the rest of your life, what would it be?
What kind of candy would you want to be in your birthday present?
What is the most trouble that you ever got into in school?
What's the best comeback you've ever heard?
What's the longest you've ever gone without taking a bath?
Who in this group is the most similar to you?
Have you ever failed something purposefully?
Have you ever stolen money from your parents?
Roblox or Minecraft?
What's a situation when you look back you should have gone ahead and done it?
Are you often hard on yourself?
Have you ever left a restaurant without paying the bill?
If you were the opposite gender for the day? What do you think you would wear? What would you do?
Do you think rain smells good?
Who on this server do you talk to the most and why?
If you could assign one household chore to someone else, what would it be?
Who is someone you recently thought about that you haven't seen or talked to in years?
Have you ever laughed at a totally inappropriate moment?
Have you ever spread a rumor?
Who in this room would be the worst to be trapped in an elevator with?
Would you stop talking to all of your friends for a million dollars?
What's something that makes you laugh?
What sound will instantly melt your heart?
What is something you thought would be a great idea but was terrible when you actually did it?
Where is the strangest place you've used the bathroom?
What kind of bird would you like to be?
What question are you trying to answer most in your life right now?
What's the most recent interesting conversation you had?
Do you practice what you say before making a call? Why?
What college do you plan on going to?
When was the last time you spied on someone's text messages?
What's your go-to funny story now, but was horrendous at that moment?
Have you ever had an imaginary friend? If so, what was their name?
What is the most expensive thing you own?
For what in your life do you feel most grateful?
What talent do you have that's embarrassing to share?
What's your most embarrassing swimming story?
Can you explain love?
What is the one highest standard you hold yourself to?
How many times did you put gum under the table in school?
Are you ticklish? If so, where?
How many siblings do you have?
What is the most recent silly thing you did?
Have you smelled the inside of a seashell?
What is your "guilty pleasure"?
If you suddenly won the lottery, what would you spend it on?
What is your secret talent?
Do you have any hidden talents?
What is the hardest course for you at school?
Would you ever cheat off a friend's paper?
Have you ever accidentally destroyed something that was important to someone else?
Are you scared of dying? Why?
What would you do if your closest friend or crush left you?
Do you like where you live?
Are there any words that you simply can't stand?
If Jurassic Park were real, would you visit it?
What's your favorite daily routine?
If you could paint your room any color what would you choose?
What do you think is your best physical quality?
Do you think you look worse or better than most people you know?
What are the worst typos you make?
What is the most disgusting thing you've ever done?
What's something that everyone hates, but you like?
If you had to choose, would you rather be too hot or too cold?
What's the meanest thing you've ever done?
What is the best lie you convinced someone that was true?
Have you ever told someone you wouldn’t be home just so they wouldn’t come over to yours?
If you had an extra hour a day that had to be allocated to one specific purpose, how would you use it?
If you could change one thing about your childhood, what would it be?
How much would you do to get your dream guy/girl/partner?
What's the dumbest thing you've done recently?
What is the most recent fact you learned that surprised you?
What is your favourite movie?
Have you ever watched a movie or TV show that you know you’re not allowed?
Who is the most annoying person in the room?
What has surprised you most in life?
What is the worst dream that you have had?
How do you usually react if you receive bad service?
What was the last dream you had?
What is your best talent?
Who is the worst teacher you have ever had, why?
What is the longest amount of time that you have ever been awake?
If you had to be renamed a name other than your own, which would you pick?
What is your special talent?
What's the dumbest dare you've done?
Have you ever picked your nose and ate it?
What's the worst thing you've ever done to someone else?
What is your favorite game?
What's the scariest movie you've ever seen?
What's the first thing you do in the morning?
Who is the nicest person here?
Would you ever want to be famous, and if so, for what?
Have you ever walked into something while on the phone?
Do you think cheating is ever justified?
Would you ever get plastic surgery?
What's something that everyone else likes, but you don't?
Have you skipped school?
What's your favorite thing to do when you're all alone?
What is a fear you overcame?
Have you ever cried during a movie?
What is your dream pet?
Would you prefer to be the opposite/different gender?
What's your favorite emoji?
Have you ever let someone else get punished for something you did?
Have you ever had a terrible house guest? If so, what happened?
Do you look up to anyone here?
What’s the most embarrassing thing you’ve worn to school?
If you got a million dollars, but had to spend it in one day, what would you do with all of your money?
If you were to devote your life to art, what type of art would that be?
Who affects you the most when they are sad in the server?
What's the way you find yourself procrastinating most?
What's something that really happened to you but nobody would believe unless they were there?
Is the dress 'Black and Blue' or 'Gold and White'?
How would you describe someone who is wealthy?
How much money would you need in the bank to feel comfortable to retire today?
If you were to be famous for something, what would that be?
What languages can you speak?
If you could know one thing from the past, what would it be?
What is the most expensive thing you bought that wasn’t a house or a car?
Have you ever stolen anything?
What animal are you scared of?
If you could take away one bad thing in the world, what would it be?
Have you ever broken something and not told anyone?
Could you go two months without talking to your friends?
Have you ever had a near-death experience?
Have you ever played sick because you didn't want to see a friend?
Have you ever drawn on someone when they were asleep?
What's the worst piece of advice you ever got from someone?
What was your New Year's resolution? How's it coming along?
What is the most embarrassing thing you have put on social media?
If you could make one of your dreams come true, which would it be?
Do you cover your eyes during scary movie scenes?
What do you think about your IRL friends?
If you had the opportunity to look through someone's email without them knowing, would you?
What animal do you think best reflects your personality?
What is your favorite sport in the Olympics?
If you could accomplish three things in life what would they be?
Which parent are you closer to, and why?
What's your favorite holiday?
What's the best part of rain?
What's the weirdest thing you've done on a plane?
What would you like to do in the future that you don't dare to do now?
What's the most embarrassing thing that you've put on social media?
What's the story behind why you replaced the last phone you had?
Have you ever said you finished your dinner when you really didn’t?
What's the most expensive thing you've stolen?
Where are you from?
What is your favorite movie and why?
What is your favourite sport?
How many selfies do you take per day?
Do you play any sports?
What's the best compliment you've received?
Imagine that you're on a deserted island and can only bring 2 things with you. What would they be?
What is your favourite school subject?
What's your least favorite song?
What is the longest that you have ever been without taking a shower?
Who's your least favorite person in this server?
Have you ever clipped your toenails in public?
Do you brush your teeth twice a day?
Who is your celebrity crush?
Do you bite your nails?
What is your favorite food?
Do you talk to yourself in the mirror?
What's one thing you'd like to do if there were no consequences?
What was the nastiest prank you've ever played on someone?
Do you pick your nose?
What is your favorite day of the week?
What is your favorite movie/tv/video game character?
What's your favorite dessert?
When you want to escape from everyone, where do you go?
Have you ever cried during a movie? If so, which one?
What is the most annoying thing that one of your siblings does?
What's the last thing that you broke and how did it happen?
What are the three qualities you feel are most important in a friend?
If you were put in a random place in your city/town, could you find your way home?
If you had one week to live and had to marry someone here, who would it be?
How many times a day do you brush your teeth?
What's the most beautiful place you've ever been to?
What is the grossest thing you've done today?
What is the most embarrassing music you listen to?
How many selfies do you take a day?
What is the craziest thing you've ever watched?
Have you ever skipped school?
Who's the worst person you've ever met?
If everyone here was in a horror movie, who would die first?
Do you sleep naked?
What is the next thing you have on your to-buy list?
If you had to delete one app from your phone, which one would it be?
`;
const TruthGAYText = `
Have you ever fucked  in public
`;
const DareGAYText = `
show your dick to the whole vC
Show the vc your last porn link
`;

const DareRText = `Attempt to turn the other players on using only sounds.
Out of the first three people in the member list, pick one to Fuck, one to Marry, and one to Kill.
Look player of you choice in the eyes and whisper 'I'm coming' five times.
Stay either shirtless or pantsless for the rest of the game.
Yell something dirty.
Go commando for the rest of the game.
Make out with the person with their name last in alphabetical order.
Tell everyone your darkest secret.
Dirty talk one person here for 1 minute.
Tell us about the best orgasm you've ever had.
Fake an orgasm for the group.
Ask a person of your choice in your DMs to fuck you.
Describe your ideal kiss in detail.
Send the group a sexy photo.
Reveal either your dick size or bra size to the group.
Kiss someone's neck here.
Tell a dirty joke.
Suck on the person to your left's fingers for 30 seconds.
Have phone sex with someone from this server in this server in front of everyone.
In three words, describe what you are like in bed.
Show your BDSM test results
Make out with one person in the group for 30 seconds.
Out of the first three people in the offline list, pick one to Fuck, one to Marry, and one to Kill.
Make out with the person with their name first in alphabetical order.
Kiss someone here three times.
Ask the third person in your DMs to join you for a threesome.
Ask someone to go to a strip club with you.
Suck on the toes of one person in the group.
Write a dirty fantasy for the group around 300 words long.
Kiss a person of your choice in this group.
Leave an R-rated voicemail for player of your choice.
What's one thing on your 'sex bucket list?'
Type "p" into your search bar and send a screenshot of the results
Join voice chat and give your most sexual moan.
Describe one of your sexual experiences vividly for the group.
Point at one person blindfolded, and kiss the person that you picked.
Out of the last three people to send a message in this channel, pick one to Fuck, one to Marry, and one to Kill.
Either give a lap dance to someone or pick someone to give you a lapdance.
Ask a person in this server to have phone sex with you.
Make out with someone for five minutes straight.
Pretend the group is clueless and explain how to give good head for everyone.
Imitate a female orgasm.
Pick one person here to go into a closet or small room with you for 5 minutes.
Give us one example of a time you tried seducing someone that went horribly wrong!
Pick one person in the group, and try to convince them to kiss you for 2 minutes. They have to refuse for 2 minutes, and then it's up to them.
Announce who you think is the sexiest member here, online or not.
Send a dirty text to your ex.
`;

const TruthRText = `Have you ever tried ecstasy?
Have you ever taken it in the butt or would you?
What is the weirdest thing you dreamt of doing with someone?
What time of day is your sex drive highest?
What are some personality traits that turn you off?
Would you ever have sex in a public place?
Who here do you want to have sex with the most?
Would you ever have sex for money?
What is your idea of perfect foreplay?
When and where do you masturbate?
What is the most you’ve done for sex in the past?
What is your least favourite position?
If you could flash one person here, who would it be?
What's the naughtiest thing you've ever done in the shower?
What's the most embarrassing thing that turns you on?
Have you ever tasted cum?
What is a somewhat weird fetish that you would actually try?
Do you think size matters?
What's the most embarrassing thing you've ever been caught doing?
Have you ever considered a threesome?
What is your opinion on MILFS/DILFS?
Have you ever blacked out because of drinking?
Have you ever had a threesome?
What do you wear to bed when you are in the mood?
What is your favorite porn site?
Do you like a lot of foreplay? What kind?
Have you ever slept with someone of the same sex?
Would you make out with someone to climb up the social ladder?
Have you ever gone streaking? If so, how was it and who were you with?
Have you ever worn a condom?
After how many dates do you usually have sex?
Who in this group would you want to see naked the least?
Who is the oldest person you've had sex with?
Have you ever been in a friends with benefits situation?
Who here is most likely to be a bottom?
Have you ever gotten a DUI?
Have you ever done something in the shower?
Have you ever used lube?
What can turn you on at any time at any place?
What is something that someone does that will immediately turn you off?
What is your favourite type of foreplay?
How did you lose your virginity?
Who's your favorite pornstar?
What's your body count?
How do you feel about threesomes? Have you ever had one, and if not, would you ever have one?
What is your biggest turn on?
How kinky do you think you are?
What's the weirdest thing you've masturbated with/to?
Have you ever had a crush on a teacher?
Have you ever had an STD?
Have you ever been high?
What is your biggest fantasy?
Have you ever gone skinny dipping?
With whom would you like to have sex? A favorite position?
What was the most uncomfortably sexual thing you experienced?
How old were you when you masturbated for the first time?
Have you ever sent nudes to someone?
Have you ever done it in the great outdoors? If so, where?
Have you ever had sex with your partner?
How many exes numbers are currently in your phone?
What’s a sex act most people like that you think is overrated?
How do you prefer sex; slow and teasing, or hot and steamy?
When was the last time you were horny?
What’s the filthiest thing you’ve imagined doing to someone?
Have you ever taken an STD test? What was the result?
Have you ever flashed someone?
If you had to choose between only oral sex or only penetrative sex for the rest of your life, which one would you pick?
When was the first time you got drunk?
Are you loud during sex?
What are some personality traits that turn you on?
Who in this group would you want to see naked the most?
Would you go to a nude beach?
What is your favorite porn genre?
What would you like to do with your partner that you haven't done yet?
Have you ever used an embarrassing novelty condom (for example, that glows in the dark or has a picture of Darth Vader on it)?
What is your favorite sex position?
What's the weirdest thing you've done while drunk?
What is the sexiest part of the body?
What’s the weirdest thing you've ever done in front of the mirror?
Do you have same-sex fantasies?
Assuming every person has their price, what is yours?
Who or what do you think about while touching yourself?
What is the longest time you've gone without sex?
If I gave you a free pass to hook up with one celebrity, who would it be and why?
Have you ever made out with someone in this group?
What is your biggest sexual fear?
Have you ever tasted urine? What did it taste like and how did it happen?
Have you ever faked an orgasm?
Have you ever blacked out from drinking too much?
How many people have you slept with?
Have you ever talked on the phone while being pleasured?
Have you ever filmed yourself getting dirty?
Have you ever had sex with a classmate?
Do you have any fetishes? If so, what are they?
Do you like a lot of foreplay? What sorts?
Do you prefer to have music in the background, or for it to be quiet?
Have you ever hooked up with the same sex?
What particular detail turns you on about people you find attractive?
Who was your worst kiss ever?
What is your favorite position?
Do you prefer the lights on or off?
Did you ever fantasize about a teacher or an authority figure? Who and what was it?
Have you ever done anything dirty with someone?
What kind of foreplay would you like to try?
Have you ever been in a threesome? Would you ever?
What's something dirty you've always been too shy to say to someone?
Have you ever used sex toys?
What's an item on your sexual bucket list?
Do you have any interesting fetishes?
What is the most amount of shots that you have taken in one night?
Are you into BDSM play?
What’s something most people consider a turn-off, but that turns you on?
Did you smoke or drink before college? Or did you start when you got here?
Does size matter?
When was the strongest orgasm you ever have, and what was it like?
Would you have sex on a first date?
Have you ever had a threesome? If so, what was the ratio of guys to girls?
Do you like feet?
What is the longest amount of time that you have gone without intercourse?
What is the most annoying thing that your roommate has ever done?
If you had to pick two people here to have a threesome with, who would it be?
What's better, good looking or good in bed?
What is your weirdest fetish?
What do you think about masturbation? If okay, how often in a week do you do it?
Are second rounds exciting or exhausting?
Have you ever used a food item to masturbate?
If you had to do 'seven minutes in heaven' with someone here, who would you pick?
When was the first time you smoked?
Do you have any fetishes/kinks?
Have you ever done a strip-tease for someone?
Have you ever climaxed when still fully clothed?
Have you ever walked in on your parents doing it?
Have you ever been to a sex club? Would you go if you were invited?
Have you ever fantasized about someone (here) to tie you up?
What are some of your turn-ons and turn-offs?
What would be a perfect sex toy for you?
Have you ever sucked dick?
What's the hottest dream you've ever had?
Do you think toe sucking is totally hot or really gross?
If you could have sex with anybody in the world, who would it be?
Have you ever masturbated?
Have you ever watched hentai, and if so, did you enjoy it?
Have you ever slept with someone, then woke up wishing you never have?
How long was your longest orgasm?
At what age did you start watching porn?
Have you ever fantasized about a person in front of you?
Have you ever had sex with someone here?
How long does your ideal quickie last?
Have you ever had a one night stand? If so, how many have you had?
Did you smoke or drink before you turned the legal age?
If you had to torture one person here, not being yourself, who would it be?
Have you ever had sex in your parent's bed?
Have you ever thought about being a stripper?
Who do you know that you think is probably really kinky?
Have you ever sent nudes to someone from here?
What's the most exciting place you've ever had sex?
If you could have 1 sexual superpower what would it be?
What does your partner prefer on you: briefs, boxers, thong?
Do you have an “I’m getting laid tonight” outfit? What it is?
Do you prefer the lights on or off during sex?
Have you ever walked in on your parents?
What is your "sweet spot"?
Spit or Swallow?
How do you like to be kissed?
Have you ever watched another couple have sex?
When was the last time you watched porn?
Have you ever done hard drugs?
What are some of your fetishes?
What bra or underwear size do you wear?
Who’s the most inappropriate person you’ve ever had a fantasy about?
If you could have a threesome with two other people here, who would you pick?
Have you ever been to a sex shop? If so, what did you buy/wanted to buy there?
Would you ever watch your partner have sex with someone else?
What’s #1 on your sexual bucket list right now?
Do you like loud or silent people in bed?
What is the grossest thing you have had in your mouth?
Could you live without watching “adult videos"?
Who's the hottest one here?
How many people have you kissed?
What's the stupidest thing you've ever done while under the influence?
Are you sexually attracted to anyone in the group?
`;

const DarePG13 = DarePG13Text.split("\n");
const TruthPG13 = TruthPG13Text.split("\n");
const DarePG = DarePGText.split("\n");
const TruthPG = TruthPGText.split("\n");
const DareR = DareRText.split("\n");
const TruthR = TruthRText.split("\n");
const TruthGAY = TruthGAYText.split("\n");
const DareGAY = DareGAYText.split("\n");
