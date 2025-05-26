import time
import pyttsx3
import speech_recognition as sr
from datetime import datetime
from plyer import notification

# Initialize recognizer and text-to-speech engine
recognizer = sr.Recognizer()
engine = pyttsx3.init()

def speak(text):
    """Text-to-speech for responses."""
    engine.say(text)
    engine.runAndWait()

def tell_time():
    """Announces the current time."""
    current_time = datetime.now().strftime("%I:%M %p")
    response = f"The current time is {current_time}"
    print(response)
    speak(response)

def add_reminder(reminders):
    """Adds a new reminder based on voice input."""
    speak("Please say the reminder title.")
    title = listen_for_command()  # Capture title via voice

    speak("Now, Enter the date and time ")
    date_time =input("In this format: YYYY-MM-DD HH:MM") # Capture date and time via voice

    try:
        # Parse date and time to check format
        datetime.strptime(date_time, "%Y-%m-%d %H:%M")
        reminder = {"title": title, "time": date_time, "repeat": "once"}
        reminders.append(reminder)
        speak("Reminder added successfully.")
        print(f"Added reminder: {title} at {date_time}")
    except ValueError:
        speak("Sorry, the date and time format was incorrect.") 

def check_reminders(reminders):
    """Checks and notifies for reminders."""
    while True:
        now = datetime.now().strftime("%Y-%m-%d %H:%M")
        for reminder in reminders[:]:  # Work on a copy to remove items safely
            if reminder["repeat"] == "once" and reminder["time"] == now:
                notification.notify(
                    title="Reminder",
                    message=reminder["title"],
                    timeout=10
                )
                reminders.remove(reminder)  # Remove after notification

        time.sleep(60)  # Check every minute

def listen_for_command():
    """Listens for and returns a voice command."""
    with sr.Microphone() as source:
        print("Listening for a command...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)

        try:
            command = recognizer.recognize_google(audio).lower()
            print(f"Recognized command: {command}")
            return command
        except sr.UnknownValueError:
            speak("Sorry, I didn't understand that.")
        except sr.RequestError:
            speak("Sorry, there was an error with the speech recognition service.")
        return ""

def main():
    
    speak("Hello! I am ready to listen to your commands.")
    
    while True:
        command = listen_for_command()
        if "time" in command:
            tell_time()
        elif "set a reminder" in command:
            add_reminder(reminders)
        elif "thank you" in command or "exit" in command:
            speak("You're welcome! Goodbye.")
            break
        else:
            speak("Please say 'time' to hear the time or 'set a reminder' to add a reminder.")
    
    # Start the reminder checking in the background
    print("Starting to monitor reminders.")
    check_reminders(reminders)

    

if __name__ == "__main__":
    main()
