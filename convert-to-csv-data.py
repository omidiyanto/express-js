import pandas as pd
import json

# Baca file JSON
with open('output/result.json') as f:
    data = json.load(f)

# Buat DataFrame dari JSON data
df = pd.DataFrame(data)

# Simpan DataFrame ke dalam file CSV
df.to_csv('output/score.csv', index=False)

print("Konversi JSON ke CSV berhasil dilakukan.")
