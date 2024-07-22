let base = window.location.origin;
base += "/src/data/";
base = base.replace("undefined", "");

let Files = [
  {
    title: `Lil' Sunday Barbecue`,
    stems: {
      full: { mplc: `${base}Lil' Sunday Barbecue/ES_Lil' Sunday Barbecue.mp3` },
      bass: {
        mplc: `${base}Lil' Sunday Barbecue/ES_Lil' Sunday Barbecue STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Lil' Sunday Barbecue/ES_Lil' Sunday Barbecue STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Lil' Sunday Barbecue/ES_Lil' Sunday Barbecue STEMS INSTRUMENTS.mp3`,
      },
      melody: {
        mplc: `${base}Lil' Sunday Barbecue/ES_Lil' Sunday Barbecue STEMS MELODY.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Lil' Sunday Barbecue/Images/XS.jpeg`,
        S: `${base}Lil' Sunday Barbecue/Images/S.jpeg`,
        M: `${base}Lil' Sunday Barbecue/Images/M.jpeg`,
        L: `${base}Lil' Sunday Barbecue/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Lil' Sunday Barbecue (Instrumental Version)`,
    stems: {
      full: {
        mplc: `${base}Lil' Sunday Barbecue (Instrumental Version)/ES_Lil' Sunday Barbecue (Instrumental Version).mp3`,
      },
      bass: {
        mplc: `${base}Lil' Sunday Barbecue (Instrumental Version)/ES_Lil' Sunday Barbecue (Instrumental Version) STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Lil' Sunday Barbecue (Instrumental Version)/ES_Lil' Sunday Barbecue (Instrumental Version) STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Lil' Sunday Barbecue (Instrumental Version)/ES_Lil' Sunday Barbecue (Instrumental Version) STEMS INSTRUMENTS.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Lil' Sunday Barbecue (Instrumental Version)/Images/XS.jpeg`,
        S: `${base}Lil' Sunday Barbecue (Instrumental Version)/Images/S.jpeg`,
        M: `${base}Lil' Sunday Barbecue (Instrumental Version)/Images/M.jpeg`,
        L: `${base}Lil' Sunday Barbecue (Instrumental Version)/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Reconnect`,
    stems: {
      full: { mplc: `${base}Reconnect/ES_Reconnect.mp3` },
      bass: { mplc: `${base}Reconnect/ES_Reconnect STEMS BASS.mp3` },
      drums: { mplc: `${base}Reconnect/ES_Reconnect STEMS DRUMS.mp3` },
      instruments: {
        mplc: `${base}Reconnect/ES_Reconnect STEMS INSTRUMENTS.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Reconnect/Images/XS.jpeg`,
        S: `${base}Reconnect/Images/S.jpeg`,
        M: `${base}Reconnect/Images/M.jpeg`,
        L: `${base}Reconnect/Images/L.jpeg`,
      },
    },
  },
  {
    title: `If You Come with Me Tonight (Instrumental Version)`,
    stems: {
      full: {
        mplc: `${base}If You Come with Me Tonight (Instrumental Version)/ES_If You Come with Me Tonight (Instrumental Version).mp3`,
      },
      bass: {
        mplc: `${base}If You Come with Me Tonight (Instrumental Version)/ES_If You Come with Me Tonight (Instrumental Version) STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}If You Come with Me Tonight (Instrumental Version)/ES_If You Come with Me Tonight (Instrumental Version) STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}If You Come with Me Tonight (Instrumental Version)/ES_If You Come with Me Tonight (Instrumental Version) STEMS INSTRUMENTS.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}If You Come with Me Tonight (Instrumental Version)/Images/XS.jpeg`,
        S: `${base}If You Come with Me Tonight (Instrumental Version)/Images/S.jpeg`,
        M: `${base}If You Come with Me Tonight (Instrumental Version)/Images/M.jpeg`,
        L: `${base}If You Come with Me Tonight (Instrumental Version)/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Bitter`,
    stems: {
      full: { mplc: `${base}Bitter/ES_Bitter.mp3` },
      bass: { mplc: `${base}Bitter/ES_Bitter STEMS BASS.mp3` },
      drums: { mplc: `${base}Bitter/ES_Bitter STEMS DRUMS.mp3` },
      instruments: { mplc: `${base}Bitter/ES_Bitter STEMS INSTRUMENTS.mp3` },
      melody: { mplc: `${base}Bitter/ES_Bitter STEMS MELODY.mp3` },
    },
    coverArt: {
      sizes: {
        XS: `${base}Bitter/Images/XS.jpeg`,
        S: `${base}Bitter/Images/S.jpeg`,
        M: `${base}Bitter/Images/M.jpeg`,
        L: `${base}Bitter/Images/L.jpeg`,
      },
    },
  },
  {
    title: `A Night Off`,
    stems: {
      full: { mplc: `${base}A Night Off/ES_A Night Off.mp3` },
      bass: { mplc: `${base}A Night Off/ES_A Night Off STEMS BASS.mp3` },
      drums: { mplc: `${base}A Night Off/ES_A Night Off STEMS DRUMS.mp3` },
      instruments: {
        mplc: `${base}A Night Off/ES_A Night Off STEMS INSTRUMENTS.mp3`,
      },
      melody: { mplc: `${base}A Night Off/ES_A Night Off STEMS MELODY.mp3` },
    },
    coverArt: {
      sizes: {
        XS: `${base}A Night Off/Images/XS.jpeg`,
        S: `${base}A Night Off/Images/S.jpeg`,
        M: `${base}A Night Off/Images/M.jpeg`,
        L: `${base}A Night Off/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Be Your Girlfriend`,
    stems: {
      full: { mplc: `${base}Be Your Girlfriend/ES_Be Your Girlfriend.mp3` },
      bass: {
        mplc: `${base}Be Your Girlfriend/ES_Be Your Girlfriend STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Be Your Girlfriend/ES_Be Your Girlfriend STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Be Your Girlfriend/ES_Be Your Girlfriend STEMS INSTRUMENTS.mp3`,
      },
      melody: {
        mplc: `${base}Be Your Girlfriend/ES_Be Your Girlfriend STEMS MELODY.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Be Your Girlfriend/Images/XS.jpeg`,
        S: `${base}Be Your Girlfriend/Images/S.jpeg`,
        M: `${base}Be Your Girlfriend/Images/M.jpeg`,
        L: `${base}Be Your Girlfriend/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Treat You the Right Way`,
    stems: {
      full: {
        mplc: `${base}Treat You the Right Way/ES_Treat You the Right Way.mp3`,
      },
      bass: {
        mplc: `${base}Treat You the Right Way/ES_Treat You the Right Way STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Treat You the Right Way/ES_Treat You the Right Way STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Treat You the Right Way/ES_Treat You the Right Way STEMS INSTRUMENTS.mp3`,
      },
      melody: {
        mplc: `${base}Treat You the Right Way/ES_Treat You the Right Way STEMS MELODY.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Treat You the Right Way/Images/XS.jpeg`,
        S: `${base}Treat You the Right Way/Images/S.jpeg`,
        M: `${base}Treat You the Right Way/Images/M.jpeg`,
        L: `${base}Treat You the Right Way/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Treat You the Right Way (Instrumental Version)`,
    stems: {
      full: {
        mplc: `${base}Treat You the Right Way (Instrumental Version)/ES_Treat You the Right Way (Instrumental Version).mp3`,
      },
      bass: {
        mplc: `${base}Treat You the Right Way (Instrumental Version)/ES_Treat You the Right Way (Instrumental Version) STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Treat You the Right Way (Instrumental Version)/ES_Treat You the Right Way (Instrumental Version) STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Treat You the Right Way (Instrumental Version)/ES_Treat You the Right Way (Instrumental Version) STEMS INSTRUMENTS.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Treat You the Right Way (Instrumental Version)/Images/XS.jpeg`,
        S: `${base}Treat You the Right Way (Instrumental Version)/Images/S.jpeg`,
        M: `${base}Treat You the Right Way (Instrumental Version)/Images/M.jpeg`,
        L: `${base}Treat You the Right Way (Instrumental Version)/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Hawaii (Instrumental Version)`,
    stems: {
      full: {
        mplc: `${base}Hawaii (Instrumental Version)/ES_Hawaii (Instrumental Version).mp3`,
      },
      bass: {
        mplc: `${base}Hawaii (Instrumental Version)/ES_Hawaii (Instrumental Version) STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Hawaii (Instrumental Version)/ES_Hawaii (Instrumental Version) STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Hawaii (Instrumental Version)/ES_Hawaii (Instrumental Version) STEMS INSTRUMENTS.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Hawaii (Instrumental Version)/Images/XS.jpeg`,
        S: `${base}Hawaii (Instrumental Version)/Images/S.jpeg`,
        M: `${base}Hawaii (Instrumental Version)/Images/M.jpeg`,
        L: `${base}Hawaii (Instrumental Version)/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Hawaii`,
    stems: {
      full: { mplc: `${base}Hawaii/ES_Hawaii.mp3` },
      bass: { mplc: `${base}Hawaii/ES_Hawaii STEMS BASS.mp3` },
      drums: { mplc: `${base}Hawaii/ES_Hawaii STEMS DRUMS.mp3` },
      instruments: { mplc: `${base}Hawaii/ES_Hawaii STEMS INSTRUMENTS.mp3` },
      melody: { mplc: `${base}Hawaii/ES_Hawaii STEMS MELODY.mp3` },
    },
    coverArt: {
      sizes: {
        XS: `${base}Hawaii/Images/XS.jpeg`,
        S: `${base}Hawaii/Images/S.jpeg`,
        M: `${base}Hawaii/Images/M.jpeg`,
        L: `${base}Hawaii/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Battle Scars (All U Gonna Get)`,
    stems: {
      full: {
        mplc: `${base}Battle Scars (All U Gonna Get)/ES_Battle Scars (All U Gonna Get).mp3`,
      },
      bass: {
        mplc: `${base}Battle Scars (All U Gonna Get)/ES_Battle Scars (All U Gonna Get) STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Battle Scars (All U Gonna Get)/ES_Battle Scars (All U Gonna Get) STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Battle Scars (All U Gonna Get)/ES_Battle Scars (All U Gonna Get) STEMS INSTRUMENTS.mp3`,
      },
      melody: {
        mplc: `${base}Battle Scars (All U Gonna Get)/ES_Battle Scars (All U Gonna Get) STEMS MELODY.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Battle Scars (All U Gonna Get)/Images/XS.jpeg`,
        S: `${base}Battle Scars (All U Gonna Get)/Images/S.jpeg`,
        M: `${base}Battle Scars (All U Gonna Get)/Images/M.jpeg`,
        L: `${base}Battle Scars (All U Gonna Get)/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Battle Scars (All U Gonna Get) (Instrumental Version)`,
    stems: {
      full: {
        mplc: `${base}Battle Scars (All U Gonna Get) (Instrumental Version)/ES_Battle Scars (All U Gonna Get) (Instrumental Version).mp3`,
      },
      bass: {
        mplc: `${base}Battle Scars (All U Gonna Get) (Instrumental Version)/ES_Battle Scars (All U Gonna Get) (Instrumental Version) STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Battle Scars (All U Gonna Get) (Instrumental Version)/ES_Battle Scars (All U Gonna Get) (Instrumental Version) STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Battle Scars (All U Gonna Get) (Instrumental Version)/ES_Battle Scars (All U Gonna Get) (Instrumental Version) STEMS INSTRUMENTS.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Battle Scars (All U Gonna Get) (Instrumental Version)/Images/XS.jpeg`,
        S: `${base}Battle Scars (All U Gonna Get) (Instrumental Version)/Images/S.jpeg`,
        M: `${base}Battle Scars (All U Gonna Get) (Instrumental Version)/Images/M.jpeg`,
        L: `${base}Battle Scars (All U Gonna Get) (Instrumental Version)/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Lil Boot`,
    stems: {
      full: { mplc: `${base}Lil Boot/ES_Lil Boot.mp3` },
      bass: { mplc: `${base}Lil Boot/ES_Lil Boot STEMS BASS.mp3` },
      drums: { mplc: `${base}Lil Boot/ES_Lil Boot STEMS DRUMS.mp3` },
      instruments: {
        mplc: `${base}Lil Boot/ES_Lil Boot STEMS INSTRUMENTS.mp3`,
      },
      melody: { mplc: `${base}Lil Boot/ES_Lil Boot STEMS MELODY.mp3` },
    },
    coverArt: {
      sizes: {
        XS: `${base}Lil Boot/Images/XS.jpeg`,
        S: `${base}Lil Boot/Images/S.jpeg`,
        M: `${base}Lil Boot/Images/M.jpeg`,
        L: `${base}Lil Boot/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Lil Me Too`,
    stems: {
      full: { mplc: `${base}Lil Me Too/ES_Lil Me Too.mp3` },
      bass: { mplc: `${base}Lil Me Too/ES_Lil Me Too STEMS BASS.mp3` },
      drums: { mplc: `${base}Lil Me Too/ES_Lil Me Too STEMS DRUMS.mp3` },
      instruments: {
        mplc: `${base}Lil Me Too/ES_Lil Me Too STEMS INSTRUMENTS.mp3`,
      },
      melody: { mplc: `${base}Lil Me Too/ES_Lil Me Too STEMS MELODY.mp3` },
    },
    coverArt: {
      sizes: {
        XS: `${base}Lil Me Too/Images/XS.jpeg`,
        S: `${base}Lil Me Too/Images/S.jpeg`,
        M: `${base}Lil Me Too/Images/M.jpeg`,
        L: `${base}Lil Me Too/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Lil Me Too (Instrumental Version)`,
    stems: {
      full: {
        mplc: `${base}Lil Me Too (Instrumental Version)/ES_Lil Me Too (Instrumental Version).mp3`,
      },
      bass: {
        mplc: `${base}Lil Me Too (Instrumental Version)/ES_Lil Me Too (Instrumental Version) STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Lil Me Too (Instrumental Version)/ES_Lil Me Too (Instrumental Version) STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Lil Me Too (Instrumental Version)/ES_Lil Me Too (Instrumental Version) STEMS INSTRUMENTS.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Lil Me Too (Instrumental Version)/Images/XS.jpeg`,
        S: `${base}Lil Me Too (Instrumental Version)/Images/S.jpeg`,
        M: `${base}Lil Me Too (Instrumental Version)/Images/M.jpeg`,
        L: `${base}Lil Me Too (Instrumental Version)/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Lil Critterz`,
    stems: {
      full: { mplc: `${base}Lil Critterz/ES_Lil Critterz.mp3` },
      bass: { mplc: `${base}Lil Critterz/ES_Lil Critterz STEMS BASS.mp3` },
      drums: { mplc: `${base}Lil Critterz/ES_Lil Critterz STEMS DRUMS.mp3` },
      instruments: {
        mplc: `${base}Lil Critterz/ES_Lil Critterz STEMS INSTRUMENTS.mp3`,
      },
      melody: { mplc: `${base}Lil Critterz/ES_Lil Critterz STEMS MELODY.mp3` },
    },
    coverArt: {
      sizes: {
        XS: `${base}Lil Critterz/Images/XS.jpeg`,
        S: `${base}Lil Critterz/Images/S.jpeg`,
        M: `${base}Lil Critterz/Images/M.jpeg`,
        L: `${base}Lil Critterz/Images/L.jpeg`,
      },
    },
  },
  {
    title: `No Reason`,
    stems: {
      full: { mplc: `${base}No Reason/ES_No Reason.mp3` },
      bass: { mplc: `${base}No Reason/ES_No Reason STEMS BASS.mp3` },
      drums: { mplc: `${base}No Reason/ES_No Reason STEMS DRUMS.mp3` },
      instruments: {
        mplc: `${base}No Reason/ES_No Reason STEMS INSTRUMENTS.mp3`,
      },
      melody: { mplc: `${base}No Reason/ES_No Reason STEMS MELODY.mp3` },
    },
    coverArt: {
      sizes: {
        XS: `${base}No Reason/Images/XS.jpeg`,
        S: `${base}No Reason/Images/S.jpeg`,
        M: `${base}No Reason/Images/M.jpeg`,
        L: `${base}No Reason/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Drop of a Hat`,
    stems: {
      full: { mplc: `${base}Drop of a Hat/ES_Drop of a Hat.mp3` },
      bass: { mplc: `${base}Drop of a Hat/ES_Drop of a Hat STEMS BASS.mp3` },
      drums: { mplc: `${base}Drop of a Hat/ES_Drop of a Hat STEMS DRUMS.mp3` },
      instruments: {
        mplc: `${base}Drop of a Hat/ES_Drop of a Hat STEMS INSTRUMENTS.mp3`,
      },
      melody: {
        mplc: `${base}Drop of a Hat/ES_Drop of a Hat STEMS MELODY.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Drop of a Hat/Images/XS.jpeg`,
        S: `${base}Drop of a Hat/Images/S.jpeg`,
        M: `${base}Drop of a Hat/Images/M.jpeg`,
        L: `${base}Drop of a Hat/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Dishonored`,
    stems: {
      full: { mplc: `${base}Dishonored/ES_Dishonored.mp3` },
      bass: { mplc: `${base}Dishonored/ES_Dishonored STEMS BASS.mp3` },
      drums: { mplc: `${base}Dishonored/ES_Dishonored STEMS DRUMS.mp3` },
      instruments: {
        mplc: `${base}Dishonored/ES_Dishonored STEMS INSTRUMENTS.mp3`,
      },
      melody: { mplc: `${base}Dishonored/ES_Dishonored STEMS MELODY.mp3` },
    },
    coverArt: {
      sizes: {
        XS: `${base}Dishonored/Images/XS.jpeg`,
        S: `${base}Dishonored/Images/S.jpeg`,
        M: `${base}Dishonored/Images/M.jpeg`,
        L: `${base}Dishonored/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Candle Collection`,
    stems: {
      full: { mplc: `${base}Candle Collection/ES_Candle Collection.mp3` },
      bass: {
        mplc: `${base}Candle Collection/ES_Candle Collection STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Candle Collection/ES_Candle Collection STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Candle Collection/ES_Candle Collection STEMS INSTRUMENTS.mp3`,
      },
      melody: {
        mplc: `${base}Candle Collection/ES_Candle Collection STEMS MELODY.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Candle Collection/Images/XS.jpeg`,
        S: `${base}Candle Collection/Images/S.jpeg`,
        M: `${base}Candle Collection/Images/M.jpeg`,
        L: `${base}Candle Collection/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Lil Sayin' from Tennessee (Instrumental Version)`,
    stems: {
      full: {
        mplc: `${base}Lil Sayin' from Tennessee (Instrumental Version)/ES_Lil Sayin' from Tennessee (Instrumental Version).mp3`,
      },
      bass: {
        mplc: `${base}Lil Sayin' from Tennessee (Instrumental Version)/ES_Lil Sayin' from Tennessee (Instrumental Version) STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Lil Sayin' from Tennessee (Instrumental Version)/ES_Lil Sayin' from Tennessee (Instrumental Version) STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Lil Sayin' from Tennessee (Instrumental Version)/ES_Lil Sayin' from Tennessee (Instrumental Version) STEMS INSTRUMENTS.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Lil Sayin' from Tennessee (Instrumental Version)/Images/XS.jpeg`,
        S: `${base}Lil Sayin' from Tennessee (Instrumental Version)/Images/S.jpeg`,
        M: `${base}Lil Sayin' from Tennessee (Instrumental Version)/Images/M.jpeg`,
        L: `${base}Lil Sayin' from Tennessee (Instrumental Version)/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Lil Sayin' from Tennessee`,
    stems: {
      full: {
        mplc: `${base}Lil Sayin' from Tennessee/ES_Lil Sayin' from Tennessee.mp3`,
      },
      bass: {
        mplc: `${base}Lil Sayin' from Tennessee/ES_Lil Sayin' from Tennessee STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Lil Sayin' from Tennessee/ES_Lil Sayin' from Tennessee STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Lil Sayin' from Tennessee/ES_Lil Sayin' from Tennessee STEMS INSTRUMENTS.mp3`,
      },
      melody: {
        mplc: `${base}Lil Sayin' from Tennessee/ES_Lil Sayin' from Tennessee STEMS MELODY.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Lil Sayin' from Tennessee/Images/XS.jpeg`,
        S: `${base}Lil Sayin' from Tennessee/Images/S.jpeg`,
        M: `${base}Lil Sayin' from Tennessee/Images/M.jpeg`,
        L: `${base}Lil Sayin' from Tennessee/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Lil Sayin' from Tennessee (Clean Version)`,
    stems: {
      full: {
        mplc: `${base}Lil Sayin' from Tennessee (Clean Version)/ES_Lil Sayin' from Tennessee (Clean Version).mp3`,
      },
      bass: {
        mplc: `${base}Lil Sayin' from Tennessee (Clean Version)/ES_Lil Sayin' from Tennessee (Clean Version) STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Lil Sayin' from Tennessee (Clean Version)/ES_Lil Sayin' from Tennessee (Clean Version) STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Lil Sayin' from Tennessee (Clean Version)/ES_Lil Sayin' from Tennessee (Clean Version) STEMS INSTRUMENTS.mp3`,
      },
      melody: {
        mplc: `${base}Lil Sayin' from Tennessee (Clean Version)/ES_Lil Sayin' from Tennessee (Clean Version) STEMS MELODY.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Lil Sayin' from Tennessee (Clean Version)/Images/XS.jpeg`,
        S: `${base}Lil Sayin' from Tennessee (Clean Version)/Images/S.jpeg`,
        M: `${base}Lil Sayin' from Tennessee (Clean Version)/Images/M.jpeg`,
        L: `${base}Lil Sayin' from Tennessee (Clean Version)/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Play No Games (Instrumental Version)`,
    stems: {
      full: {
        mplc: `${base}Play No Games (Instrumental Version)/ES_Play No Games (Instrumental Version).mp3`,
      },
      bass: {
        mplc: `${base}Play No Games (Instrumental Version)/ES_Play No Games (Instrumental Version) STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}Play No Games (Instrumental Version)/ES_Play No Games (Instrumental Version) STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}Play No Games (Instrumental Version)/ES_Play No Games (Instrumental Version) STEMS INSTRUMENTS.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}Play No Games (Instrumental Version)/Images/XS.jpeg`,
        S: `${base}Play No Games (Instrumental Version)/Images/S.jpeg`,
        M: `${base}Play No Games (Instrumental Version)/Images/M.jpeg`,
        L: `${base}Play No Games (Instrumental Version)/Images/L.jpeg`,
      },
    },
  },
  {
    title: `ready FR (Instrumental Version)`,
    stems: {
      full: {
        mplc: `${base}ready FR (Instrumental Version)/ES_ready FR (Instrumental Version).mp3`,
      },
      bass: {
        mplc: `${base}ready FR (Instrumental Version)/ES_ready FR (Instrumental Version) STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}ready FR (Instrumental Version)/ES_ready FR (Instrumental Version) STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}ready FR (Instrumental Version)/ES_ready FR (Instrumental Version) STEMS INSTRUMENTS.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}ready FR (Instrumental Version)/Images/XS.jpeg`,
        S: `${base}ready FR (Instrumental Version)/Images/S.jpeg`,
        M: `${base}ready FR (Instrumental Version)/Images/M.jpeg`,
        L: `${base}ready FR (Instrumental Version)/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Lil Mama`,
    stems: {
      full: { mplc: `${base}Lil Mama/ES_Lil Mama.mp3` },
      bass: { mplc: `${base}Lil Mama/ES_Lil Mama STEMS BASS.mp3` },
      drums: { mplc: `${base}Lil Mama/ES_Lil Mama STEMS DRUMS.mp3` },
      instruments: {
        mplc: `${base}Lil Mama/ES_Lil Mama STEMS INSTRUMENTS.mp3`,
      },
      melody: { mplc: `${base}Lil Mama/ES_Lil Mama STEMS MELODY.mp3` },
    },
    coverArt: {
      sizes: {
        XS: `${base}Lil Mama/Images/XS.jpeg`,
        S: `${base}Lil Mama/Images/S.jpeg`,
        M: `${base}Lil Mama/Images/M.jpeg`,
        L: `${base}Lil Mama/Images/L.jpeg`,
      },
    },
  },
  {
    title: `Tactics`,
    stems: {
      full: { mplc: `${base}Tactics/ES_Tactics.mp3` },
      bass: { mplc: `${base}Tactics/ES_Tactics STEMS BASS.mp3` },
      drums: { mplc: `${base}Tactics/ES_Tactics STEMS DRUMS.mp3` },
      instruments: { mplc: `${base}Tactics/ES_Tactics STEMS INSTRUMENTS.mp3` },
      melody: { mplc: `${base}Tactics/ES_Tactics STEMS MELODY.mp3` },
    },
    coverArt: {
      sizes: {
        XS: `${base}Tactics/Images/XS.jpeg`,
        S: `${base}Tactics/Images/S.jpeg`,
        M: `${base}Tactics/Images/M.jpeg`,
        L: `${base}Tactics/Images/L.jpeg`,
      },
    },
  },
  {
    title: `What They Say (Instrumental Version)`,
    stems: {
      full: {
        mplc: `${base}What They Say (Instrumental Version)/ES_What They Say (Instrumental Version).mp3`,
      },
      bass: {
        mplc: `${base}What They Say (Instrumental Version)/ES_What They Say (Instrumental Version) STEMS BASS.mp3`,
      },
      drums: {
        mplc: `${base}What They Say (Instrumental Version)/ES_What They Say (Instrumental Version) STEMS DRUMS.mp3`,
      },
      instruments: {
        mplc: `${base}What They Say (Instrumental Version)/ES_What They Say (Instrumental Version) STEMS INSTRUMENTS.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}What They Say (Instrumental Version)/Images/XS.jpeg`,
        S: `${base}What They Say (Instrumental Version)/Images/S.jpeg`,
        M: `${base}What They Say (Instrumental Version)/Images/M.jpeg`,
        L: `${base}What They Say (Instrumental Version)/Images/L.jpeg`,
      },
    },
  },
  {
    title: `A Lil BIT`,
    stems: {
      full: { mplc: `${base}A Lil BIT/ES_A Lil BIT.mp3` },
      bass: { mplc: `${base}A Lil BIT/ES_A Lil BIT STEMS BASS.mp3` },
      drums: { mplc: `${base}A Lil BIT/ES_A Lil BIT STEMS DRUMS.mp3` },
      instruments: {
        mplc: `${base}A Lil BIT/ES_A Lil BIT STEMS INSTRUMENTS.mp3`,
      },
    },
    coverArt: {
      sizes: {
        XS: `${base}A Lil BIT/Images/XS.jpeg`,
        S: `${base}A Lil BIT/Images/S.jpeg`,
        M: `${base}A Lil BIT/Images/M.jpeg`,
        L: `${base}A Lil BIT/Images/L.jpeg`,
      },
    },
  },
];

export default Files;
