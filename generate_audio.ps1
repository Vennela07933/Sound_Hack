New-Item -ItemType Directory -Force -Path "public/audio"
Add-Type -AssemblyName System.Speech

$stories = @(
    "Rahul joined a software company in June. His team was developing an e-commerce application. Rahul was responsible for the payment module. The team expected to complete the module in four weeks, but a technical issue delayed the work, and it took six weeks to complete.",
    "Attention passengers on Flight 402 to Tokyo. The flight originally scheduled for 3:15 PM from Gate B12 has been delayed due to maintenance. The new departure time is 4:45 PM, and boarding will now take place at Gate C5.",
    "Sarah arrived at the cafe at 8 AM. She ordered an iced caramel latte with oat milk and two extra shots of espresso. The barista charged her 7 dollars, and Sarah paid using her digital wallet.",
    "Mission Control announced that the Astra-7 shuttle launch was paused at T-minus 10 minutes. A sensor anomaly was detected in oxygen tank 2. Engineers resolved the issue in 15 minutes, allowing successful liftoff at 11:30 AM.",
    "Detective Alex searched Manager David's office for the missing master key. The manager last saw it on Monday afternoon. Alex checked under the blue notebook on the oak desk and located the key intact.",
    "During orientation, Librarian Mrs. Green informed students that undergraduate students may borrow up to five books for fourteen days. Late returns incur a fee of two dollars per day per book.",
    "In the college basketball finals, the Eagles were trailing by one point with three seconds left on the clock. Point guard Marcus sank a three-point shot from the wing to win the championship with a final score of 88 to 86.",
    "Chef Marco was preparing his signature tomato pasta at the downtown bistro. Instead of fresh basil, he experimented by adding fresh rosemary. The critics praised the bold flavor and awarded his restaurant four stars.",
    "Dr. Kapoor introduced the new AI 3.0 model during the Tech Summit keynote in Hall 4. The model processes multimodal data 50 percent faster than version 2.0 and will release in September.",
    "Tour guide Carlos spotted a pair of wild jaguars resting near River Bend at 4 PM. The safari group observed them for twenty minutes from a safe distance of fifty meters before the animals moved into the rainforest."
)

for ($i = 0; $i -lt $stories.Length; $i++) {
    $num = $i + 1
    $wavPath = "public/audio/story$num.wav"
    $mp3Path = "public/audio/story$num.mp3"
    
    $synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
    $synth.Rate = -1
    $synth.SetOutputToWaveFile($wavPath)
    $synth.Speak($stories[$i])
    $synth.Dispose()
    
    Copy-Item $wavPath $mp3Path -Force
    Write-Host "Generated audio story $num ($mp3Path)"
}

Write-Host "All 10 Audio Stories generated successfully!"
