const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.Tween,
		C3.Plugins.Audio,
		C3.Plugins.Particles,
		C3.Behaviors.Rotate,
		C3.Behaviors.Sin,
		C3.Plugins.Touch,
		C3.Behaviors.Anchor,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Tween.Cnds.IsAnyPlaying,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Tween.Acts.StopAllTweens,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Platform.Acts.SimulateControl
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{TiledBackground2: 0},
	{Solid: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{Sprite4: 0},
	{Tween: 0},
	{Sprite5: 0},
	{Audio: 0},
	{Sprite6: 0},
	{TiledBackground3: 0},
	{Particles: 0},
	{Rotate: 0},
	{Sine: 0},
	{Sprite7: 0},
	{Particles2: 0},
	{Touch: 0},
	{Anchor: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Sprite10: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	Particles: class extends self.IParticlesInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Particles2: class extends self.IParticlesInstance {},
	Touch: class extends self.IInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {}
}