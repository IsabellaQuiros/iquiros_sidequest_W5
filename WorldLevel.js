class WorldLevel {
  constructor(json, bgImg) {
    this.schemaVersion = json.schemaVersion ?? 1;

    this.w = json.world?.w ?? 2400;
    this.h = json.world?.h ?? 1600;
    this.backgroundImg = bgImg; // replaced background colour with background image

    this.obstacles = json.obstacles ?? [];

    // NEW: camera tuning knob from JSON (data-driven)
    this.camLerp = json.camera?.lerp ?? 0.03;
  }

  drawWorld() {
    image(this.backgroundImg, 0, 0, this.w, this.h); // display image as world instead of grey rectangle
  }

  drawHUD(player, camX, camY) {
    noStroke();
    fill(255);
    textFont("Times New Roman");
    textStyle(ITALIC);
    textSize(40);
    text("Relax and take a trip through the heavens...", 40, 80);
    textSize(20);
    text(" Use arrows to navigate.", 270, 110);
  }
}
