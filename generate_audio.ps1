New-Item -ItemType Directory -Force -Path "public/audio"
Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.Rate = -1
$synth.SetOutputToWaveFile("public/audio/story1.wav")
$synth.Speak("Rahul joined a software company in June. His team was developing an e-commerce application. Rahul was responsible for the payment module. The team expected to complete the module in four weeks, but a technical issue delayed the work, and it took six weeks to complete.")
$synth.Dispose()
Copy-Item "public/audio/story1.wav" "public/audio/story1.mp3" -Force
Write-Host "Audio generated successfully!"
