#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn add_two(number1: f32, number2: f32) -> String {
  format!("the results are: {}", number1 + number2)
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![add_two])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
