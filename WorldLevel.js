class WorldLevel {
  constructor(json, bgImg) {
    this.schemaVersion = json.schemaVersion ?? 1;

    this.w = json.world?.w ?? 2400;
    this.h = json.world?.h ?? 1600;
    this.gridStep = json.world?.gridStep ?? 160;
    this.backgroundImg = bgImg; // replaced background colour with background image

    this.obstacles = json.obstacles ?? [];

    // NEW: camera tuning knob from JSON (data-driven)
    this.camLerp = json.camera?.lerp ?? 0.12;
  }

  drawWorld() {
    image(this.backgroundImg, 0, 0, this.w, this.h); // display image as world instead of grey rectangle

    noStroke();
    fill(170, 190, 210);
    for (const o of this.obstacles) rect(o.x, o.y, o.w, o.h, o.r ?? 0);
  }

  drawHUD(player, camX, camY) {
    noStroke();
    fill(20);
    text("Example 4 — JSON world + smooth camera (lerp).", 12, 20);
    text(
      "camLerp(JSON): " +
        this.camLerp +
        "  Player: " +
        (player.x | 0) +
        "," +
        (player.y | 0) +
        "  Cam: " +
        (camX | 0) +
        "," +
        (camY | 0),
      12,
      40,
    );
  }
}
